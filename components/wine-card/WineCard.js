import css from './wine-card.css' assert { type: 'css' };

class WineCard extends HTMLElement {
  constructor() {
    super();

    // this._card = {
    //   href: '#',
    //   imgSrc: 'https://generatorfun.com/code/uploads/Random-Wine-image-1.jpg',
    //   title: 'Random Title',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // };
  }

  connectedCallback() {
    const isRow = JSON.parse(this.getAttribute('data-row'));

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];

    const card = document.createElement('div');
    card.classList.add('card');
    if (isRow) {
      card.classList.add('row');
    }

    const img = document.createElement('img');
    img.classList.add('card__image');
    img.src = this._card.imgSrc;

    const content = document.createElement('div');
    content.classList.add('card__content');
    if (isRow) {
      content.classList.add('row');
    }

    const h3 = document.createElement('h3');
    h3.classList.add('card__title');
    h3.textContent = this._card.title;

    const p = document.createElement('p');
    p.classList.add('card__text');
    p.textContent = this._card.text;

    const a = document.createElement('a');
    a.href = this._card.href;
    a.classList.add('card__link');
    a.textContent = 'Read more';

    content.appendChild(h3);
    content.appendChild(p);
    content.appendChild(a);

    card.appendChild(img);
    card.appendChild(content);

    shadow.appendChild(card);
  }
}

customElements.define('wine-card', WineCard);
