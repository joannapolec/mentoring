import { pathToRegexp } from 'path-to-regexp';

const routes = [
  {
    path: pathToRegexp('/'),
    component: 'wine-home',
  },
  {
    path: pathToRegexp('/category'),
    component: 'wine-category',
  },
  {
    path: pathToRegexp('/product/:id'),
    component: 'wine-product',
  },
  {
    path: pathToRegexp('/admin'),
    component: 'wine-admin',
  },
];

class WineRouter extends HTMLElement {
  constructor() {
    super();
  }

  navigate(url, state = null) {
    window.history.pushState(state, null, url);
  }

  connectedCallback() {
    this.navigate(window.location.pathname);
    const shadow = this.attachShadow({ mode: 'closed' });
  }
}

customElements.define('wine-router', WineRouter);
