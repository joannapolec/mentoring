export const dropdownTemplate = () => {
  const template = `<template id="dropdown">
    <div class="dropdown">
      <button>
        <span class="dropdown-button__text">
          <slot name="button"></slot>
        </span>
        <span class="dropdown-button__icon">
          <slot name="icon">
            <img src="/icons/chevron-down.svg" alt="icon" />
          </slot>
        </span>
      </button>
      <div class="droddown__content">
        <slot name="dropdown-list"></slot>
      </div>
    </div>
  </template>`;

  const div = document.createElement('div');
  div.innerHTML = template;

  return div.querySelector('template').content;
};

const dropdownItemTemplate = `<template id="dropdown-item">
  <div class="dropdown-item">
    <slot name="content"></slot>
  </div>
</template>`;
