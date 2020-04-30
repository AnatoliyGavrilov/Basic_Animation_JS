// let timerID = setTimeout(sayHello, 3000);
// clearTimeout(timerID);

// let timerID = setInterval(sayHello, 3000);
// clearTimeout(timerID);

// function sayHello() {
//   console.log('Hello world');
// }

// let timerID = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log,2000);
// });

let btn = document.querySelector('.animation');
    elem = document.querySelector('.blue');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame,10);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click',myAnimation);

let btnBlock = document.querySelector('.grey');
    btns = document.querySelector('.yellows')

// btnBlock.addEventListener('click',function(event){
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello!');
//     }
// });

// btnBlock.addEventListener('click',function(event){
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('Hello!');
//     }
// });

btnBlock.addEventListener('click',function(event){
    if (event.target && event.target.matches('button.first')) {
        console.log('Hello!');
    }
});