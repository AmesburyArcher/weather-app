import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination__container');

  addHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagBTN');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    // _.data is in array form [0]model.weatherFivedays [1]model.page [2]model.resPerPage
    const curPage = this._data[1];
    const numPages = Math.ceil(
      this._data[0].hourlyForecast.length / this._data[2]
    );
    if (curPage === 1 && numPages > 1)
      return `
      <div class="pagination__container>
          <div class="pagination__container">
              <button class="pagBTN pagBTNRight" data-goto="${curPage + 1}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon--arrow-right"
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
          </div>
      </div>
    `;
    if (curPage === numPages && numPages > 1)
      return `
      <div class="pagination__container>
          <div class="pagination__container">
              <button class="pagBTN pagBTNLeft" data-goto="${curPage - 1}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-arrow-left"
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="11" y2="18" />
                  <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
              </button>
          </div>
      </div>
      `;
    if (curPage < numPages)
      return `
      <div class="pagination__container>
          <div class="pagination__container">
              <button class="pagBTN pagBTNLeft" data-goto="${curPage - 1}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-arrow-left"
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="11" y2="18" />
                  <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
              </button>
              <button class="pagBTN pagBTNRight" data-goto="${curPage + 1}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon--arrow-right"
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
          </div>
      </div>
      `;
    return '';
  }
}

export default new PaginationView();
