const apiKey = '801ba5a5040a44cc9809c04fa679d765&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Fetch weather data from OpenWeatherMap API
const getWeather = async (zip) => {
    const res = await fetch(`${baseURL}${zip}&appid=${apiKey}`);
    try {
        const data = await res.json();
        console.log('Weather Data:', data); // Debug API response
        return data;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
};

// Post data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log('Data posted successfully:', newData); // Debug posted data
        return newData;
    } catch (error) {
        console.log('Error posting data:', error);
    }
};

// Update UI with data from the server
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const data = await request.json();
        console.log('UI Data:', data); // Debug fetched data
        document.getElementById('temp').innerHTML = `Temperature: ${Math.round(data.temperature)}°F`;
        document.getElementById('date').innerHTML = `Date: ${data.date}`;
        document.getElementById('content').innerHTML = `Feeling: ${data.userResponse}`;
    } catch (error) {
        console.log('Error updating UI:', error);
    }
};

// Perform action on button click
document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
    console.log('Generate button clicked!'); // Debug button click
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    if (!zip) {
        alert('Please enter a ZIP code.');
        return;
    }

    getWeather(zip).then((weatherData) => {
        if (!weatherData || !weatherData.main || !weatherData.main.temp) {
            console.log('Invalid weather data:', weatherData); // Debug invalid data
            alert('Unable to fetch weather data. Please check the ZIP code.');
            return;
        }

        postData('/add', {
            temperature: weatherData.main.temp,
            date: new Date().toLocaleDateString(),
            userResponse: feelings,
        }).then(updateUI);
    });
}