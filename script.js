const pytJs = document.getElementById('btn-pr-css');
const prts = document.querySelector('.css-proyect');

pytJs.addEventListener('click', ()=>{
    pytJs.classList.toggle('aside__button--active');
    prts.classList.toggle('visible');
})