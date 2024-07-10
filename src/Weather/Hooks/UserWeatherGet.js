import { useState, useEffect } from "react";
// import { getWeather } from "../Utill";
import { getWeather } from "../utill";

export const UseWeather = () => {
  const [Weather, setWeather] = useState([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await getWeather();
        setWeather(response.users);
        setLoading(false);
      } catch (error) {
        setWeather(false);
        setErrors(`Error:${error.message}`);
      }
    };
    fetchWeather();
  }, []);
  return { Weather, loading, errors };
};





/*
import { useState, useEffect } from "react";
// import { getWeather } from "../utils/weatherApi";
import { getWeather } from "../utill";

export const UseWeather = () => {
  const [weather, setWeather] = useState(null);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await getWeather();
        setWeather(response);
        setLoading(false);
      } catch (error) {
        setWeather(null);
        setErrors(`Error: ${error.message}`);
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return { weather, loading, errors };
};*/