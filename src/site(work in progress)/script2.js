//switch between register and login
wrapper = document.querySelector('.wrapper');
loginLink = document.querySelector('.login-link');
registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})