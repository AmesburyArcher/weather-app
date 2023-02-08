import * as model from './model.js';
import weatherInfoView from './views/weatherInfoView.js';
import inputView from './views/inputView.js';
import unitView from './views/unitView.js';

const controlWeatherToday = async function () {
  try {
    // Get search information from input view
    const query = inputView.getQuery();
    const city = query[0];
    const country = query[1];
    weatherInfoView.renderSpinner();
    // Send search information to model to retreive weather info
    await model.getWeather(city, country);
    console.log(model.state.weatherSameday);

    // Display weather info from weatherInfoView
    weatherInfoView.render(model.state.weatherSameday, model.state.unit);
  } catch (err) {}
};

const controlUnit = function () {
  const currentUnit = model.state.unit;
  currentUnit === 'C' ? (model.state.unit = 'F') : (model.state.unit = 'C');
  return model.state.unit;
};

const init = function () {
  inputView.addHandler(controlWeatherToday);
  unitView.addHandler(controlUnit);
};

init();
