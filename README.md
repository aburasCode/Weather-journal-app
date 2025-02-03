# Weather-Journal App

## Introduction
This project is an asynchronous web application that fetches weather data from the OpenWeatherMap API and updates the UI dynamically based on user input. Users can enter their zip code and a personal note to retrieve and log weather information. The app is built using Node.js, Express, and vanilla JavaScript.

## Project Setup
### Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project folder:
   ```sh
   cd Weather-Journal-App
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```
4. Create an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and store it in `app.js`:
   ```js
   const apiKey = '<your_api_key>&units=imperial';
   ```

## Project Structure
```
Weather-Journal-App/
├── website/
│   ├── index.html
│   ├── style.css
│   ├── app.js
├── server.js
├── package.json
├── README.md
```

## Features
- Fetch weather data using OpenWeatherMap API.
- Store weather data along with the user’s input.
- Update the UI dynamically with the retrieved data.
- Run a local server with Express.

## How to Run the Project
### Start the Server
1. Run the server:
   ```sh
   node server.js
   ```
2. The server will be running on `http://localhost:8000/` (or any specified port).

### Using the App
1. Open `index.html` in a browser.
2. Enter a zip code and a note, then click "Generate".
3. View the updated weather information and note displayed dynamically.

## API Routes
### GET Route (Server Side)
- Endpoint: `/all`
- Returns stored project data.

### POST Route (Server Side)
- Endpoint: `/add`
- Expects JSON data:
  ```json
  {
    "temperature": <number>,
    "date": "<string>",
    "user_response": "<string>"
  }
  ```

## Dynamic UI
- User input is collected from an HTML form.
- Weather data and user input are displayed dynamically.
- The UI updates upon each new submission.

## Technologies Used
- HTML, CSS, JavaScript
- Node.js & Express
- OpenWeatherMap API

## Acknowledgments
- Udacity for project guidelines
- OpenWeatherMap for weather data API

---
Happy coding! 🚀
