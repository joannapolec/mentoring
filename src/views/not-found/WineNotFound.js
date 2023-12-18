import parseTemplate from '../../utils/parseTemplate.js';

class WineNotFound extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const template = await parseTemplate('./src/views/not-found/template.html');

    shadow.appendChild(template);
  }
}

customElements.define('wine-not-found', WineNotFound);
