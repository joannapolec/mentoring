import css from './wine-dropdown.css' assert { type: 'css' };

class WineDropdown extends HTMLElement {
    constructor() {
        super();

        this._data = {
            button: {
                text: 'Nawigacja'
            },
            options: [
                {
                    text: ' Link 1',
                    selected: false,
                },
                {
                    text: 'Link 2',
                    selected: false,
                },
                {
                    text: 'Link 3',
                    selected: false,
                }
            ]
        }
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.adoptedStyleSheets = [css];


        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');

        const button = document.createElement('div');
        button.classList.add('button');

        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = this._data.button.text;

        const icon = document.createElement('span');
        icon.classList.add('icon');
        icon.innerHTML = '<iconify-icon icon="ph:list-bold"></iconify-icon>';

        button.appendChild(text);
        button.appendChild(icon);

        const menu = document.createElement('div');
        menu.classList.add('dropdown-menu');

        const list = document.createElement('ul');

        this._data.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.textContent = option.text;
            list.appendChild(li);

            li.addEventListener('click', () => {
                this._data.options[index].selected = !this._data.options[index].selected;
                if(this._data.options[index].selected) {
                    li.classList.add('selected');
                } else {
                    li.classList.remove('selected');
                }
            })
        });

        menu.appendChild(list);

        button.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        dropdown.appendChild(button)
        dropdown.appendChild(menu);

        shadow.appendChild(dropdown);
    }
}

const html = `
    <div class="dropdown">
        <div class="button">
            <span class="text">Filtruj</span>
            <span class="icon">&#9660;</span>
        </div>
        <div class="dropdown-menu">
            <ul>
                <li> opcja1 </li>
                <li> opcja2 </li>
                <li> opcja3 </li>
            </ul>
        </div>

    </div>
`

customElements.define('wine-dropdown', WineDropdown);