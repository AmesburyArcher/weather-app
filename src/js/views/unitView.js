import View from './View';

class UnitView extends View {
  _parentElement = document.querySelector('.unit__toggle');

  addHandler(handler) {
    const that = this;
    this._parentElement.addEventListener('click', function () {
      const unit = handler();
      that._parentElement.textContent = `º${unit}`;
    });
  }
}

export default new UnitView();
