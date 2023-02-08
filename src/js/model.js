import { getJSON } from './helpers';
import { API_URL_TODAY, API_URL_5DAY, API_KEY } from './config';

export const state = {
  weatherSameday: {},
  weatherFiveDays: {},
  unit: 'C',
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
        date: entry.dt_txt,
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
