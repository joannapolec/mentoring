import css from './wine-header.css' assert { type: 'css' };

class WineHeader extends HTMLElement {
  constructor() {
    super();

    this._wineheader = {
      imgSrc: './src/images/logo.jpg',
      text: 'Lorem ipsum dolor',
    };
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];

    const header = document.createElement('div');
    header.classList.add('header-body');

    const img = document.createElement('img');
    img.classList.add('header-image');
    img.src = this._wineheader.imgSrc;

    header.appendChild(img);
    shadow.appendChild(header);
  }
}

customElements.define('wine-header', WineHeader);
