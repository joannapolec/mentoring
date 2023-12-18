import css from './wine-list.css' assert { type: 'css' };

class WineList extends HTMLElement {
  constructor() {
    super();

    this._list = [...Array(4).keys()].map((index) => ({
      href: '#',
      imgSrc: 'https://generatorfun.com/code/uploads/Random-Wine-image-1.jpg',
      title: 'Random Title ' + (index + 1),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }));
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];


    const carousel = document.createElement('div');
    carousel.classList.add('list');

    carousel.dataSource = this._list.forEach((card) => {
      const wineCard = document.createElement('wine-card');
      wineCard._card = card;
      carousel.appendChild(wineCard);
    });

    shadow.appendChild(carousel);
  }
}

customElements.define('wine-list', WineList);
