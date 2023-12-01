import css from './wine-footer.css' assert { type: 'css' };

class wineFooter extends HTMLElement {
  constructor() {
    super();

    this._winefooter = {
      text: '© Lorem ipsum dolor sit amet 2023.',
      firstHeading: 'First heading',
      secondHeading: 'Footer Content',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      linkList: [
        {
          href: 'google.com',
          text: 'Google',
        },
        {
          href: 'facebook.com',
          text: 'Facebook',
        },
      ],
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

    const firstHeading = document.createElement('h3');
    firstHeading.classList.add('h3');

    const secondHeading = firstHeading.cloneNode();

    firstHeading.textContent = this._winefooter.firstHeading;
    secondHeading.textContent = this._winefooter.secondHeading;

    const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = this._winefooter.p;

    const contentRight = document.createElement('div');
    contentRight.classList.add('footer-content-links');

    const links = document.createElement('ul');
    links.classList.add('ul');

    links.innerHTML = `<li>
      <a href="link">Link 1</a>
    </li>
    <li>
      <a href="link">Link 2</a>
    </li>
    <li>
    <a href="link">Link 3</a>
  </li>`;

    // this._winefooter.linkList.forEach((link) => {
    //   const li = document.createElement('li');
    //   const a = document.createElement('a');
    //   a.href = link.href;
    //   a.textContent = link.text;
    //   li.appendChild(a);
    //   links.appendChild(li);
    // });

    const copyright = document.createElement('div');
    copyright.classList.add('footer-copyright');
    copyright.textContent = this._winefooter.text;

    footerBody.appendChild(content);
    content.appendChild(contentLeft);
    contentLeft.appendChild(firstHeading);
    contentLeft.appendChild(p);


    content.appendChild(contentRight);
    contentRight.appendChild(secondHeading);
    contentRight.appendChild(links);


    footerBody.appendChild(copyright);

    shadow.appendChild(footerBody);
  }
}

customElements.define('wine-footer', wineFooter);
