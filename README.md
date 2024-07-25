# SpoonExplorer

SpoonExplorer is a web application that helps users explore and find restaurants based on their preferred cuisine and location. Users can either enter a location manually or use their live location to find nearby restaurants.

## Features

- Search for restaurants by cuisine and location.
- Use live location to find nearby restaurants.
- Display search results with restaurant details.
- Show restaurant locations on a Google Map with markers.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- Tailwind CSS for styling
- Google Maps JavaScript API
- Yelp API for restaurant data
- Browser Geolocation API

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Google Maps API key.
- A Yelp API key.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/spoonexplorer.git
    cd spoonexplorer
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your API keys:

    ```
    GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    YELP_API_KEY=your_yelp_api_key
    ```

4. Start the server:

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:8888`.

## Usage

### Home Page

1. Enter your preferred cuisine in the "Preferred Cuisine" field.
2. Either check the "Use My Live Location" checkbox or enter a location manually in the "Location" field.
3. Click the "Search" button to see the results.

### Search Results

- The left side of the page shows the list of restaurants based on your search criteria.
- The right side of the page displays a Google Map with markers for each restaurant.


## API Integration

### Yelp API

The application uses the Yelp API to fetch restaurant data based on the user's search criteria.

### Google Maps API

The application uses the Google Maps JavaScript API to display restaurant locations on a map with markers.

### Browser Geolocation API

The application uses the Browser Geolocation API to get the user's live location if they choose to use it. This allows the app to find nearby restaurants based on the user's current location.

