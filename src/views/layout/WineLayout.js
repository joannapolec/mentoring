import parseTemplate from '../../utils/parseTemplate.js';

class WineLayout extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const template = await parseTemplate('./src/views/layout/template.html');

    shadow.appendChild(template);
  }
}

customElements.define('wine-layout', WineLayout);
