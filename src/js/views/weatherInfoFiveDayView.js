import View from './View';
import { KELVIN } from '../config';

class WeatherInfoFiveDayView extends View {
  _parentElement = document.querySelector('.other__days__information');

  _svgIcons = {
    Clouds: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-cloud" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
    </svg>
    `,

    Snow: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-cloud-snow" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
      <path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
    </svg>
    `,

    Rain: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-rain" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
      <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
    </svg>
    `,

    Clear: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
    `,
  };

  _generateMarkup() {
    const unit = this._extraParam;

    return this._data
      .map(
        entry => `
        <div class="other__day__timeslot">
            <div class="other__day__date">${entry.date}</div>
              <div class="other__day__curWeather">${entry.curWeather}${
          this._svgIcons[entry.curWeather]
        }</div>
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
