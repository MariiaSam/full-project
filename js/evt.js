const box = document.querySelector('.js-box');
console.log(box);
const jsButton = document.querySelectorAll('.js-button')

box.addEventListener('click', handlerBox);
 
function handlerBox(evt) {
if (evt.currentTarget === evt.target){
    return;
} 

if (!evt.target.classList.contains('.js-button')){
return;
}
console.log(evt.target);
}

// jsButton.addEventListener('click', handlerButton);

// function handlerButton(evt) {
    
//     console.log(evt.target);

//     }