import View from './View';
import { API_ICON_URL, KELVIN } from '../config';

class WeatherInfoViewToday extends View {
  _parentElement = document.querySelector('.today__information');
  _errorMessage =
    'Sorry, an error has occured we were unable to process your request.';

  _generateMarkup() {
    const time = Date.now();
    const today = new Date(time);
    const formatted = today.toDateString();
    const unit = this._extraParam;
    return `
        <div class="left__today__information">
            <div class="today__city">${this._data.location}</div>
            <div class="today__description">${
              this._data.weather.description
            }</div>
            <div class="today__date">${formatted}</div>
            <div class="today__temperature">${(unit === 'C'
              ? this._data.temperature.temp - KELVIN
              : (this._data.temperature.temp - KELVIN) * (9 / 5) + 32
            ).toFixed(1)}º${unit}</div>
            <div class="today__icon">
              <img src="${API_ICON_URL}${
      this._data.weather.icon
    }@2x.png" alt="weather-icon">
            </div>
            </div>
          <div class="right__today__information">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-temperature-feelsLike"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <line x1="10" y1="9" x2="14" y2="9" />
            </svg>
            <div class="today__feelslike__container">
              <div class="today__feelslike__label">Feels like</div>
              <div class="today__feelslike__val">${(unit === 'C'
                ? this._data.temperature.feelsLike - KELVIN
                : (this._data.temperature.feelsLike - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-humid"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
              <path d="M6 14h12" />
              <path d="M7.305 17.695l3.695 -3.695" />
              <path d="M10.26 19.74l5.74 -5.74l-5.74 5.74z" />
            </svg>
            <div class="today__humidity__container">
              <div class="today__humidity__label">Humidity</div>
              <div class="today__humidity__val">${
                this._data.temperature.humidity
              }%</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-temperature-min"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <line x1="8" y1="9" x2="12" y2="9" />
              <line x1="16" y1="9" x2="22" y2="9" />
            </svg>
            <div class="today_temp__min__container">
              <div class="today__temp__min__label">Minimum Temperature</div>
              <div class="today__temp__min__val">${(unit === 'C'
                ? this._data.temperature.tempMin - KELVIN
                : (this._data.temperature.tempMin - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-temperature-max"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <line x1="8" y1="9" x2="12" y2="9" />
              <line x1="16" y1="9" x2="22" y2="9" />
              <line x1="19" y1="6" x2="19" y2="12" />
            </svg>
            <div class="today_temp__max__container">
              <div class="today__temp__max__label">Minimum Temperature</div>
              <div class="today__temp_max__val">${(unit === 'C'
                ? this._data.temperature.tempMax - KELVIN
                : (this._data.temperature.tempMax - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-wind"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
              <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
              <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
            </svg>
            <div class="today__windspeed__container">
            <div class="today__windspeed__container">
              <div class="today__windspeed__label">Wind Speed</div>
              <div class="today__windspeed__val">${
                this._data.weather.windSpeed
              } km/h</div>
            </div>
        </div>
    `;
  }
}

export default new WeatherInfoViewToday();
