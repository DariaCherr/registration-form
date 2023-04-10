let el_1 = document.querySelectorAll('.firstName');
let el_2 = document.querySelectorAll('.lastName');
let el_3 = document.querySelectorAll('.nationality');
let el_4 = document.querySelectorAll('.userEmail');
let el_5 = document.querySelectorAll('.date');
let el_6 = document.querySelectorAll('.gender');
let el_7 = document.querySelectorAll('.userPassword');
let el_8 = document.querySelectorAll('.confirmPassword');

function visibleInput(el) {
    el[0].classList.add('form__card_visible');
}

setInterval(() => { visibleInput(el_1) }, 50);
setInterval(() => { visibleInput(el_2) }, 50);
setInterval(() => { visibleInput(el_3) }, 700);
setInterval(() => { visibleInput(el_4) }, 700);
setInterval(() => { visibleInput(el_5) }, 1400);
setInterval(() => { visibleInput(el_6) }, 1400);
setInterval(() => { visibleInput(el_7) }, 2000);
setInterval(() => { visibleInput(el_8) }, 2000);

clearInterval(setInterval(() => { visibleInput(el_8) }, 2000));