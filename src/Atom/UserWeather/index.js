// import userEvent from "@testing-library/user-event"

// const WeatherCard= ({currentweather,timezone}) =>{
//     return(
//         <div>
//             <h2>{currentweather}</h2>
//             <p>{timezone}</p>
//         </div>
//     )
// }
// export default WeatherCard;




// Atom/WeatherCard.jsx
// const WeatherCard = ({ currentWeather, timezone }) => {
//     return (
//       <div>
//         <h2>Current Weather: {currentWeather}</h2>
//         <p>Timezone: {timezone}</p>
//       </div>
//     );
//   };
  
//   export default WeatherCard;




const WeatherCard = ({ currentWeather, timezone }) => {
    return (
      <div>
        <h2>Current Weather: {currentWeather}°C</h2>
        <p>Timezone: {timezone}</p>
      </div>
    );
  };
  
  export default WeatherCard;