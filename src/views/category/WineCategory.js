import parseTemplate from '../../utils/parseTemplate.js';

class WineCategory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const template = parseTemplate('./src/views/category/template.html');

    shadow.appendChild(template);
  }
}

customElements.define('wine-category', WineCategory);
