import View from './View';

class InputView extends View {
  _parentElement = document.querySelector('.location__form');

  getQuery() {
    const input = this._parentElement.querySelector('.city__form').value;
    const res = input.split(',').map(val => val.trim());
    this._parentElement.querySelector('.city__form').value = '';
    return res;
  }

  addHandler(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new InputView();
