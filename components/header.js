/*Template code from: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
      <div class="header important_for_user">
        <button class="button">Games</button>
        <button class="button">Shop</button>
        <button class="button">Community</button> 
        <button class="button">Gebruikersnaam</button>
    </div>
    `;
  }
}

  customElements.define('header-component', Header);*/