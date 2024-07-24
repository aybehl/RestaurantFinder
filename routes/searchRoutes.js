const express = require('express');
const router = express.Router();
const axios = require('axios');

//GET request to search for restaurants based on some filters
router.get('/', async (req, res) => {
    const { latitude, longitude, location, cuisine } = req.query;
  
    let params;
    if (latitude && longitude) {
      params = {
        term: cuisine,
        latitude,
        longitude,
        limit: 20,
        sort_by: 'best_match'
      };
    } else if (location) {
      params = {
        term: cuisine,
        location,
        limit: 20,
        sort_by: 'best_match'
      };
    } else {
      return res.redirect('/');
    }
    
    try { 
      const yelpResponse = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`
        },
        params
      });
  
      const businesses = yelpResponse.data.businesses;
      //console.log(businesses);
      res.render('map', { 
        businessesString: JSON.stringify(businesses), 
        businesses,
        mapId: process.env.MAP_ID,
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, 
        userLocation: { latitude, longitude }, 
        searchQuery: "Ayushi Behl"
       });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data from Yelp API');
    }
  });

module.exports = router;