import View from './View';
import { KELVIN } from '../config';

class WeatherInfoFiveDayView extends View {
  _parentElement = document.querySelector('.other__days__information');

  _generateMarkup() {
    const unit = this._extraParam;

    return this._data
      .map(
        entry => `
        <div class="other__day__timeslot">
            <div class="other__day__date">${entry.date}</div>
              <div class="other__day__curWeather">${entry.curWeather}</div>
              <div class="other__day__description">${entry.description}</div>
              <div class="other__day__temperature">Temperature: ${(unit === 'C'
                ? entry.temp - KELVIN
                : (entry.temp - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
              <div class="other__day__feelsLike">Feels like: ${(unit === 'C'
                ? entry.feelsLike - KELVIN
                : (entry.feelsLike - KELVIN) * (9 / 5) + 32
              ).toFixed(1)}º${unit}</div>
        </div>
    `
      )
      .join('');
  }
}

export default new WeatherInfoFiveDayView();
