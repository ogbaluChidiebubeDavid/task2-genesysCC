let flipperButton = document.querySelector('.btn');
let flipContainer = document.querySelector('.img-col');
let confirmPswd = document.querySelector('#confpswd');
let callToAction = document.querySelector('.call-to-action');
let header = document.querySelector('.header');

function removeClass(){
    flipContainer.classList.remove("flip-container");
    flipperButton.innerText = `Welcome!!`;
    flipperButton.style.background = '#27ae60';
    header.innerText = `Sign In`;
    confirmPswd.style.display = 'none';
    callToAction.innerText = `Sign In`;
}

flipperButton.onclick = () => {
    flipContainer.classList.add("flip-container");
    // flipperButton.style.display = 'none';
    setTimeout('removeClass()', 10000)
}


