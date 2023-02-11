import { getJSON, convertDate } from './helpers';
import {
  API_URL_TODAY,
  API_URL_5DAY,
  API_KEY,
  API_ICON_URL,
  TIMESLOTS_VISIBLE,
} from './config';

export const state = {
  weatherSameday: {},
  weatherFiveDays: {},
  unit: 'C',
  page: 1,
  resPerPage: TIMESLOTS_VISIBLE,
};

const createWeatherSameDay = function (data) {
  const { main } = data;
  return (state.weatherSameday = {
    location: data.name,
    temperature: {
      feelsLike: main.feels_like,
      humidity: main.humidity,
      pressure: main.pressure,
      temp: main.temp,
      tempMax: main.temp_max,
      tempMin: main.temp_min,
    },
    weather: {
      icon: data.weather[0].icon,
      curWeather: data.weather[0].main,
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
      ...(data.rain && { rainInfo: data.rain['1h'] }),
      ...(data.snow && { snowInfo: data.snow['1h'] }),
    },
  });
};

const createWeatherFiveDays = function (data) {
  return (state.weatherFiveDays = {
    location: data.city.name,
    hourlyForecast: data.list.map(entry => {
      return {
        date: convertDate(entry.dt_txt),
        clouds: entry.clouds,
        feelsLike: entry.main.feels_like,
        temp: entry.main.temp,
        pop: entry.pop,
        ...(entry.rain && { rainInfo: entry.rain['3h'] }),
        ...(entry.snow && { snowInfo: entry.snow['3h'] }),
        curWeather: entry.weather[0].main,
        description: entry.weather[0].description,
        windSpeed: entry.wind.speed,
      };
    }),
  });
};

export const getWeather = async function (city, country = null) {
  try {
    //Update state of page
    state.page = 1;
    // Get same day weather information
    const url = `${API_URL_TODAY}q=${city}${
      country !== null ? `,${country}` : ''
    }&appid=${API_KEY}`;

    const data = await getJSON(url);
    state.weatherSameday = createWeatherSameDay(data);

    // Get forecast for 5 days
    const url_5_days = `${API_URL_5DAY}q=${city}${
      country !== null ? `,${country}` : ''
    }&appid=${API_KEY}`;

    const data_5_days = await getJSON(url_5_days);
    state.weatherFiveDays = createWeatherFiveDays(data_5_days);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getTimeslotsPerPage = function (page = state.page) {
  state.page = page;

  const start = (page - 1) * state.resPerPage;
  const end = page * state.resPerPage;
  return state.weatherFiveDays.hourlyForecast.slice(start, end);
};

export const getWeatherOnEntry = async function () {
  const onSuccess = function (position) {
    const { latitude, longitude } = position.coords;
  };

  try {
    if (navigator.geolocation) {
      navigator.geolocation(function (pos) {});
    }
  } catch (err) {}
};
