const bdark = document.querySelector('#bdark'); 
const body = document.querySelector('body'); 
const div = document.querySelector('.txt');
const div2 = document.querySelector('p');




bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
   div.classList.toggle('darkmode')
   div2.classList.toggle('darkmode')
});