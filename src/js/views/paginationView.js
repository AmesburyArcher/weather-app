import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination__container');

  _generateMarkup() {
    console.log('reached');
    return `
    <div class="pagination__container>
        <div class="pagination__container">
            <button class="pagBTNLeft">Left</button>
            <button class="pagBTNRight">Right</button>
        </div>
    </div>
    `;
  }
}

export default new PaginationView();
