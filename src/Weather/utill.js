


// const baseurl = process.env.REACT_APP_BASE_URL;

// async function response(response) {
//     if(!response.ok){
//         throw new Error(`ffrhw: ${response.status}`)
//     }
//     return await response.json();
// }

// export const getWeather = () =>{
//     fetch(`${baseurl}/weather`).then(response)
// }



// utils/weatherApi.js

// const baseUrl = process.env.REACT_APP_BASE_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

// async function handleResponse(response) {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.json();
// }

// export const getWeather = (location = 'London') => {
//     return fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`)
//         .then(handleResponse);
// };

// // export const getForecast = (location = 'London', days = 3) => {
// //     return fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=${days}`)
// //         .then(handleResponse);
// // };





// async function fetchData(baseUrl, apiKey, location) {
//     try {
//       const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
      
//       // Check if the response is ok (status in the range 200-299)
//       if (!response.ok) {
//         throw new Error(`HTTP error status: ${response.status}`);
//       }
      
//       // Parse the JSON response body
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//       throw error; // Rethrow the error to be handled by the caller
//     }
//   }


// const baseUrl = process.env.REACT_APP_BASE_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

// async function handleResponse(response) {
//     if (!response.ok) {
//         throw new Error(`HTTP error status: ${response.status}`);
//     }
//     return await response.json();
// }

// export const getWeather = async (location = 'London') => {
//     try {
//         const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
//         return await handleResponse(response);
//     } catch (error) {
//         console.error('Failed to fetch weather data:', error);
//         throw error; // Rethrow the error to be handled by the caller
//     }
// };




// Assuming baseUrl and apiKey are defined and valid
// const baseUrl = process.env.REACT_APP_BASE_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

// async function fetchWeather(location = 'London') {
//     try {
//         const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Fetch failed:', error);
//         // Handle the error appropriately here
//         // You might want to show an error message to the user or log the error
//     }
// }

// // Example usage
// fetchWeather().then(data => console.log(data)).catch(error => console.error(error));




// async function fetchWeather(location = 'London') {
//     try {
//         const response = await fetch(`${baseUrl}/weather/current.json?key=${apiKey}&q=${location}`);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         return data;
//     } catch (error) { // Catching the error here
//         // console.error('Fetch failed:', error); // Log the error
//         // Handle the error appropriately here
//         // You might want to show an error message to the user or log the error
//     }
// }

// // Example usage
// fetchWeather().then(data => console.log(data)).catch(error => console.error(error));




// // Assuming these are set in your.env file
// const baseUrl = process.env.REACT_APP_BASE_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

// async function fetchWeather(location = 'London') {
//     try {
//         const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
        
//         // if (!response.ok) {
//         //     throw new Error(`HTTP error status: ${response.status}`);
//         // }
        
//         const data = await response.json();
//         // console.log({data});
//         return data;
//     } catch (error) {
//         console.error('Fetch failed:', error);
//         throw error;
//     }
// }

// // Example usage
// fetchWeather()
//    .then(data => console.log(data));
// //    .catch(error => console.error(error));

// export const getWeather = async (location = 'London') => {
//         // try {
//         //     const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
//         //     return await handleResponse(response);
//         // } catch (error) {
//         //     console.error('Failed to fetch weather data:', error);
//         //     throw error; // Rethrow the error to be handled by the caller
//         // }
//     };




// Import necessary functions
// import { useEffect, useState } from 'react';

// Assuming these are set in your.env file
// const baseUrl = process.env.REACT_APP_BASE_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

async function fetchWeather() {
    try {
        // const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=London`);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}
fetchWeather().then(data => console.log(data));
// Example usage within a component
// function WeatherComponent() {
//     const [weatherData, setWeatherData] = useState(null);

//     useEffect(() => {
//         fetchWeather().then(data => setWeatherData(data)).catch(error => console.error(error));
//     }, []);

//     return (
//         <div>
//             {/* Render your weather data here */}
//             {weatherData && <p>Current temperature in London: {weatherData.current.temp_c}°C</p>}
//         </div>
//     );
// }

// export default WeatherComponent;


