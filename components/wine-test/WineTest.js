import css from './wine-test.css' assert { type: 'css' };

class WineTest extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const data = await fetch('components/wine-test/template.html');
    const template = await data.text();
    const body = document.createElement('body');
    body.innerHTML = template;

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];

    shadow.appendChild(body.querySelector('template').content.cloneNode(true));
  }
}

customElements.define('wine-test', WineTest);
