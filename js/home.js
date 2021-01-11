$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('.jumbotron').addClass('clip');
  } else {
    $('.jumbotron').removeClass('clip');
  }
});

