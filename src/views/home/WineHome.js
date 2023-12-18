import parseTemplate from '../../utils/parseTemplate.js';

class WineHome extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const template = await parseTemplate('./src/views/home/template.html');

    shadow.appendChild(template);
  }
}

customElements.define('wine-home', WineHome);
