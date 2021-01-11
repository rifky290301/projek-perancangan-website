$(document).ready(function () {
  if ($(window).scrollTop() >= 100) {
    $('.text-jumbotron').addClass('back');
  } else {
    $('.text-jumbotron').removeClass('back');
  }

});

