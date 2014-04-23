$(document).ready(function() {
  $('.hamburger').on('click', toggleMenu);
  $('.primary-nav').on('click', 'a', hideMenu);

  function toggleMenu(e) {
    e.preventDefault();
    $('.primary-nav').toggleClass('is-visible');
  }

  function hideMenu() {
    $('.primary-nav').removeClass('is-visible');
  }
});