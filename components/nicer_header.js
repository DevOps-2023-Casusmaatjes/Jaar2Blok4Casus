/*Template code from: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/*/

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <header>
    <h2 class="logo">Damp</h2>
    <nav class="navigation">
        <!--here all pages to navigate to-->
        <a href="../index.html">Home</a>
        <a href="../ProfilePage/Profile.html">Profile</a>
        <a href="../StorePage/Store.html">Store</a>
        <a href="../ForumPage/Forum.html">Forum</a>
        <a href="../AboutPage/About.html">About</a>
        
        <button class="btnLogin-popup">Login</button>
    </nav>
</header>
    `;
  }
}

  customElements.define('header-component', Header);