import css from './wine-dropdown.css' assert { type: 'css' } 
import { dropdownTemplate } from '/templates.js';

class WineDropdown extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'closed'})
        shadow.adoptedStyleSheets = [css];

        const template = dropdownTemplate();

        shadow.appendChild(template);
    }
}

customElements.define('wine-dropdown', WineDropdown);