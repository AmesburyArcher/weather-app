import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination__container');

  _generateMarkup() {
    console.log('reached');
    return `
    <div class="pagination__container>
        <div class="pagination__container">
            <button class="pagBTN pagBTNLeft">
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
            <button class="pagBTN pagBTNRight">
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
  }
}

export default new PaginationView();
