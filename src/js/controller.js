import * as model from './model.js';
import weatherInfoView from './views/weatherInfoView.js';
import weatherInfoFiveDayView from './views/weatherInfoFiveDayView.js';
import inputView from './views/inputView.js';
import unitView from './views/unitView.js';
import paginationView from './views/paginationView.js';

const controlWeather = async function () {
  try {
    // Get search information from input view
    const query = inputView.getQuery();
    const city = query[0];
    const country = query[1];
    // Clear current contents
    weatherInfoView.renderSpinner();
    weatherInfoFiveDayView.clear();
    paginationView.clear();
    // Send search information to model to retreive weather info
    await model.getWeather(city, country);

    // Display weather info for today
    weatherInfoView.render(model.state.weatherSameday, model.state.unit);
    //Display weather forecast for 5 days

    weatherInfoFiveDayView.render(
      model.getTimeslotsPerPage(),
      model.state.unit
    );
    // Render page buttons
    paginationView.render([
      model.state.weatherFiveDays,
      model.state.page,
      model.state.resPerPage,
    ]);
  } catch (err) {
    console.log(err);
    weatherInfoView.renderError(err);
  }
};

const controlUnit = function () {
  const currentUnit = model.state.unit;
  currentUnit === 'C' ? (model.state.unit = 'F') : (model.state.unit = 'C');
  //Update weather today
  weatherInfoView.render(model.state.weatherSameday, model.state.unit);

  //Update 5 day weather
  weatherInfoFiveDayView.render(model.getTimeslotsPerPage(), model.state.unit);

  return model.state.unit;
};

const controlPagination = function (page) {
  // Render new results
  weatherInfoFiveDayView.render(
    model.getTimeslotsPerPage(page),
    model.state.unit
  );
  // Need access to multiple model states
  paginationView.render([
    model.state.weatherFiveDays,
    model.state.page,
    model.state.resPerPage,
  ]);
};

const init = function () {
  inputView.addHandler(controlWeather);
  unitView.addHandler(controlUnit);
  paginationView.addHandler(controlPagination);
};

init();
