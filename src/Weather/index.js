// import { UseWeather} from "../Hooks/Userweatherget";
// import WeatherCard from "../Atom/userweather";

// const Weather = () => {
//   const { weather, error, loading } = UseWeather();
// //   console.log(weather);
//   return (
//     <div>
//       {loading && <h2>loading weather...</h2>}
//       {error.length > 0 && <h2>{error}</h2>}
//       {weather.length > 0
//         ? weather.map((weather) => (
//             <WeatherCard
//             key={weather.id}
//               currentweather={weather.currentweather}
//               timezone={weather.timezone}
//             />
//             // <userweather
//             //   key={weather.id}
//             //   currentweather={weather.currentweather}
//             //   timezone={weather.timezone}
//             // />
//           ))
//         : loading && <h2>no not known</h2>}
//     </div>
//   );
// };
// export default Weather;

// // Weather/index.jsx
import { UseWeather } from "./Hooks/UserWeatherGet";
// import WeatherCard from "../Atom/userweather";
import WeatherCard from "../Atom/UserWeather";


const Weather = () => {
  const { Weather, loading, errors } = UseWeather();

  if (loading) return <h2>Loading weather...</h2>;
  if (errors) return <h2>{errors}</h2>;

  return (
    <div>
      {Weather && Weather.users ? (
        <WeatherCard
          currentWeather={Weather.users.current.temp_c}
          timezone={Weather.users.location.tz_id}
        />
      ) : (
        <h2>No weather data available</h2>
      )}
    </div>
  );
};

export default Weather;





/*

import { UseWeather } from "../Hooks/UserWeatherGet";
import WeatherCard from "../Atom/UserWeather";

const Weather = () => {
  const { weather, loading, errors } = UseWeather();

  if (loading) return <h2>Loading weather...</h2>;
  if (errors) return <h2>{errors}</h2>;

  return (
    <div>
      {weather ? (
        <WeatherCard
          currentWeather={weather.current.temp_c}
          timezone={weather.location.tz_id}
        />
      ) : (
        <h2>No weather data available</h2>
      )}
    </div>
  );
};

export default Weather;*/