import View from './View';
import { KELVIN } from '../config';

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
            <div class="today__icon">SOME ICON</div>
          </div>
          <div class="right__today__information">
            <div class="today__feelslike__container">
              <div class="today__feelslike__label">Feels like</div>
              <div class="today__feelslike__val">${(unit === 'C'
                ? this._data.temperature.feelsLike - KELVIN
                : (this._data.temperature.feelsLike - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
            </div>
            <div class="today__humidity__container">
              <div class="today__humidity__label">Humidity</div>
              <div class="today__humidity__val">${
                this._data.temperature.humidity
              }</div>
            </div>
            <div class="today_temp__min__container">
              <div class="today__temp__min__label">Minimum Temperature</div>
              <div class="today__temp__min__val">${(unit === 'C'
                ? this._data.temperature.tempMin - KELVIN
                : (this._data.temperature.tempMin - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
            </div>
            <div class="today_temp__max__container">
              <div class="today__temp__max__label">Minimum Temperature</div>
              <div class="today__temp_max__val">${(unit === 'C'
                ? this._data.temperature.tempMax - KELVIN
                : (this._data.temperature.tempMax - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
            </div>
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
