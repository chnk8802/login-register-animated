const navigateToLogin = document.getElementById('navigate-to-login')
const navigateToSignup = document.getElementById('navigate-to-signup')
const login = document.getElementById('login')
const signup = document.getElementById('signup')
const mainContainer = document.getElementsByClassName('container')[0]
const otherContainer = document.querySelector('.other-container');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');

navigateToSignup.addEventListener('click', () => {
    signup.style.display = "none"
    login.style.display = "flex"
    otherContainer.classList.remove('slide-other-container-left');
    otherContainer.classList.add('slide-other-container-right');
    signup.classList.remove('slide-form-container-right');
    login.classList.add('slide-form-container-left');
    d1.classList.remove('abrLeft')
    d1.classList.add('abrRight')
    d2.innerText = "Login"
})

navigateToLogin.addEventListener('click', () => {
    login.style.display = "none"
    signup.style.display = "flex"
    otherContainer.classList.remove('slide-other-container-right');
    otherContainer.classList.add('slide-other-container-left');
    login.classList.remove('slide-form-container-left');
    signup.classList.add('slide-form-container-right');
    d1.classList.remove('abrRight')
    d1.classList.add('abrLeft')
    d2.innerText = "Register"
})