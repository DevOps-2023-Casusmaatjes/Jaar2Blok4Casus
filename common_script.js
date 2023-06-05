document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    iconClose.addEventListener('click', () => {
        window.location.href = "../index.html";
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = sanitizeInput(document.getElementById('email').value);
        var password = sanitizeInput(document.getElementById('password').value);
        console.log('Email:', username);
        console.log('Password:', password);
    });

    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = sanitizeInput(document.getElementById('register-username').value);
        var email = sanitizeInput(document.getElementById('register-email').value);
        var password = sanitizeInput(document.getElementById('register-password').value);
        var address = sanitizeInput(document.getElementById('register-Address').value);
        var dateOfBirth = sanitizeInput(document.getElementById('register-Date of Birth').value);
        var hashedPassword = PasswordHasher(password);

        function PasswordHasher(Pword) {
            const g = 31;
            var hash = 0;
            for (var i = 0; i < Pword.length; i++) {
                hash = g * hash + Pword.charCodeAt(Pword.indexOf(Pword.charAt(i)));}
            return hash;}


        console.log('Register-Username:', username);
        console.log('Register-Email:', email);
        console.log('Register-Password:', hashedPassword);
        console.log('Register-Address:', address);
        console.log('Register-Date of Birth:', dateOfBirth);
    });

    function sanitizeInput(input) {
        // replace potentially dangerous characters with HTML entity equivalents
        var sanitizedInput = input
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
        return sanitizedInput;
    }
});
