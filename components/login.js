/*Template code from: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/*/

class login extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <div class="wrapper">
        
        <span class="icon-close"><ion-icon name="close"></ion-icon></span>
        <div class="form-box login">
            <h2>Log in</h2>
            <p> Enter user information to log into your excisting account!</p>
            <!--login form-->
            <form action="#" id="login-form">
                
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" id="email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" id="password" required>
                    <label>Password</label>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox">Remeber me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Log In</button>
                <div class="login-register">
                    <p>No excisting account? <a href="#" class="register-link">Register here!</a></p>
                </div>
            </form>
        </div>
<!--______________________________________________________________________________________________-->
        <div class="form-box register">
            <h2>Register</h2>
            <p> Enter user information to create your own account!</p>
            <!--register form-->
            <form action="#" id="register-form">

                <div class="input-box">
                    <span class="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="username" id="register-username" required>
                    <label>Username</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" id="register-email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="location"></ion-icon></span>
                    <input type="text" id="register-Address" required>
                    <label>Address</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="calendar"></ion-icon></span>
                    <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="register-Date of Birth" required>
                    <label>Date of Birth</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" id="register-password" required>
                    <label>Password</label>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox">Agree to terms of service</label>
                </div>
                <button type="submit" class="btn">Create Account</button>
                <div class="login-register">
                    <p>Already have an account? <a href="#" class="login-link">Log in</a></p>
                </div>
            </form>
        </div>
<!--______________________________________________________________________________________________-->
    </div>
    `;
  }
}

  customElements.define('login-component', login);