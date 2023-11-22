import css from './wine-footer.css' assert { type: 'css' };

class wineFooter extends HTMLElement {
  constructor() {
    super();

    this._winefooter = {
    text: 'Lorem ipsum dolor sit amet 2023.',
    };
  }

  connectedCallback() {

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];

    const footerBody = document.createElement('div');
    footerBody.classList.add('footer-body');

    const p = document.createElement('p');
    p.classList.add('footer-body-p');
    p.textContent = this._winefooter.text;

    footerBody.appendChild(p);

    shadow.appendChild(footerBody);
  }
}

customElements.define('wine-footer', wineFooter);