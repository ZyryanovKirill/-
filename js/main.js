const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__mobile');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__mobile--active');
  menuBtn.classList.toggle('btn-mobile--active');
  body.classList.toggle('body--hidden')
});

$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    autoplay: {
    delay: 50,
    },responsive: [
       {
        breakpoint: 670,
            settings: {
              arrows: false,
              dots: false,
          }
      },
     ]

  });
});

$(document).ready(function() {
  $('.slider-2').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            arrows: false,
        }
      },
      {
        breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
            arrows: false,
          }
      },
     ]

  });
});

$(document).ready(function() {
  $('.slider-3').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1450,
          settings: {
            slidesToShow: 4,
            arrows: false,
          }
      },
      {
        breakpoint: 768,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
      },
      {
        breakpoint: 550,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
      },
     ]

  });
});

const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {
    
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

const tabsTitle2 = document.querySelectorAll('.blog-pagination__list-item');
const tabsContent2 = document.querySelectorAll('.tab__content');

tabsTitle2.forEach(item => item.addEventListener('click', event => {
    
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle2.forEach(element => element.classList.remove('active-tab-pagination'));

    tabsContent2.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active-tab-pagination');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("modal").classList.add("open")
});

document.getElementById("close-modal-btn").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("open")
});

document.getElementById("close-modal-2").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("open")
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal").classList.remove("open")
  }
});

document.querySelector("#modal .modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

const ratingItemsList = document.querySelectorAll('.rating_item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

document.querySelectorAll('.rating_item').forEach(item =>
    item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )

);
