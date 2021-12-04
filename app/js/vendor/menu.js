window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-btn');
  const menu = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu-list__link');
  burger.addEventListener('click', workMenu)

  menuItem.forEach(link => {
    link.addEventListener('click', () => {
      link.parentNode.classList.add('menu-list__item--active');
      burger.classList.remove('burger-btn--active');
      menu.classList.remove('menu--active');
      
    document.body.classList.remove('hidden');
    })
    link.addEventListener('mouseenter', () => {
      link.parentNode.classList.add('menu-list__item--active');
    })
    link.addEventListener('mouseleave', () => {
      link.parentNode.classList.remove('menu-list__item--active');
    })
  })

  window.addEventListener('scroll', activeMenuLink);

  function activeMenuLink() {
    for (let link of menuItem) {
      let blockName = link.getAttribute('href');
      let activeBlock = document.querySelector(`${blockName}`);
      let posBlock = window.pageYOffset + activeBlock.getBoundingClientRect().top;
      let heightBlock = activeBlock.clientHeight;
      if (window.pageYOffset + 150 > posBlock && window.pageYOffset + 100 < (posBlock + heightBlock)) {
        document.querySelector(`a[href="${blockName}"]`).parentNode.classList.add('menu-list__item--active');
      } else {
        document.querySelector(`a[href="${blockName}"]`).parentNode.classList.remove('menu-list__item--active');
      }
    }
  }

  function workMenu() {
    burger.classList.toggle('burger-btn--active');
    menu.classList.toggle('menu--active');
    document.body.classList.toggle('hidden');
  }
});