window.addEventListener('DOMContentLoaded', ()=>{
  const burger = document.querySelector('.burger-btn');
  const menu = document.querySelector('.menu');
  if(burger){
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger-btn--active');
      burger.classList.contains('burger-btn--active') ? menu.classList.add('menu--active'):menu.classList.remove('menu--active');
    })
  }
})