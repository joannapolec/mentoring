import css from './wine-list.css' assert { type: 'css' };

class WineList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];

    const list = document.createElement('div');
    list.classList.add('list');

    this._list.forEach((card) => {
      const wineCard = document.createElement('wine-card');
      wineCard._card = card;
      list.appendChild(wineCard);
    });

    shadow.appendChild(list);
  }
}

customElements.define('wine-list', WineList);
