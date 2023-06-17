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
                    <a href="../StorePage/StorePage.html">Store</a>
                    <a href="../ForumPage/Forum.html">Forum</a>
                    <a href="../AboutPage/About.html">About</a>
                    
                    <button id="loginButton" class="btnLogin-popup">Login</button>
                </nav>
            </header>
        `;
  
        const btnPopup = this.querySelector('.btnLogin-popup');
        btnPopup.addEventListener('click', () => {
            window.location.href = "../LoginPage/login.html";
        });
  
         /*removes login button if user is logged in*/
  
          /*function userLoggedIn() {
          if (sessionStorage.getItem("username") != null) {
              return true;
          }
          return false;
          }
  
          if (userLoggedIn()) {
              document.getElementById("loginButton").style.display = "none";
          }
          */
          
    }
  }
  
  customElements.define('header-component', Header);
  
  
  
