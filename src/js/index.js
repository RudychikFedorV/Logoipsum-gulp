// import header from './modules/header.js';
// header();

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
//   direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const headers = document.querySelectorAll("[data-name='accordeon-title']"); 
// Ищем все элементы заголовков по селектору ("[data-name='accordeon-title']"), Массиво-подобные структуры.

headers.forEach(function (item) { // на место item будет подставлен headers
    item.addEventListener('click', showContent); // Вешаем прослушку click на каждый элемент через метод forEach
})

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');// this - ссылается на тот элемент по которому мы сделали click
    // nextElementSibling - следующий соседствующий элемент
    //  classList – объект с методами add/remove/toggle
    // toggle - Включить / выключить
}