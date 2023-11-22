import css from './wine-footer.css' assert { type: 'css' };

class wineFooter extends HTMLElement {
  constructor() {
    super();

    this._winefooter = {
    text: '© Lorem ipsum dolor sit amet 2023.',
    h3: 'Footer Content',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  }

  connectedCallback() {

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.adoptedStyleSheets = [css];

    const footerBody = document.createElement('div');
    footerBody.classList.add('footer-body');

    const content = document.createElement('div');
   content.classList.add('footer-content');

   const contentLeft = document.createElement('div');
   contentLeft.classList.add('footer-content-info');

   const h3 = document.createElement('h3');
   h3.classList.add('h3');
   h3.textContent = this._winefooter.h3;

   const p = document.createElement('p');
   p.classList.add('p');
   p.textContent = this._winefooter.p; 
   
   const contentRight = document.createElement('div');
   contentRight.classList.add('footer-content-links');

 //  const links = document.createElement('ul');
   //links.classList.add('');

    const copyright = document.createElement('div');
    copyright.classList.add('footer-copyright');
    copyright.textContent = this._winefooter.text;
    
    footerBody.appendChild(content);
    content.appendChild(contentLeft);
    contentLeft.appendChild(h3);
    contentLeft.appendChild(p);

    content.appendChild(contentRight);

    footerBody.appendChild(copyright);

    shadow.appendChild(footerBody);
  }
}

customElements.define('wine-footer', wineFooter);