export default class View {
  _data;
  _extraParam;

  render(data, extraParam = null) {
    if (!data) return this.renderError();

    this._data = data;
    this._extraParam = extraParam;
    const markup = this._generateMarkup();

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
          <div class="spinner">
          </div> 
    `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <p>${message}</p>
    </div> 
    `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
