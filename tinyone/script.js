//Бургер меню
let down = false;
let shadow = document.querySelector('.shadow')
let burger = document.querySelector('.burger')

function isDown() {
    if (down) {
        burger.style.left = '-25%';
        shadow.style.left = '-100%';
        shadow.style.opacity = '0';
        down = false;
    } else {
        burger.style.left = '0';
        shadow.style.left = '0';
        shadow.style.opacity = '40%';
        down = true;
    }
}
//=====================

//Скролл на стрелочке
function ScrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 103,
        behavior: 'smooth'
    })
}

var cursor = document.querySelector('.intro_cursor');
var target = document.querySelector('.features');

cursor.addEventListener('click', () => {
        ScrollTo(target);
    })
    //=====================