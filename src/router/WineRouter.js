import { Router } from '/node_modules/@vaadin/router/dist/vaadin-router.min.js';

const ROUTES = [
  {
    path: '/',
    component: 'wine-home',
  },
  {
    path: '/category',
    component: 'wine-category',
  },
  {
    path: '/product/:id',
    component: 'wine-product',
  },
  {
    path: '/admin',
    component: 'wine-admin',
  },
  {
    path: '(.*)',
    component: 'wine-not-found',
  },
];

class WineRouter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const routerOutlet = document.createElement('div');

    const router = new Router(routerOutlet);
    router.setRoutes(ROUTES);

    shadow.appendChild(routerOutlet);
  }
}

customElements.define('wine-router', WineRouter);
