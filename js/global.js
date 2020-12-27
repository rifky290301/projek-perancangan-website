$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('#myNav').addClass('scrollNav');
    // $('#teks-bar').css('color', 'black');
  } else {
    $('#myNav').removeClass('scrollNav');
    // $('#teks-bar').css('color', 'white');
  }

  if ($(window).scrollTop() >= 100) {
    $('#content').css('opacity', '.6');
    $('#content').css('transition', '.2s');
    if ($(window).scrollTop() >= 200) {
      $('#content').css('opacity', '.3');
      $('#content').css('transition', '.2s');
      if ($(window).scrollTop() >= 300) {
        $('#content').css('opacity', '0');
        $('#content').css('transition', '.2s');
      }
    }
  } else {
    $('#content').css('opacity', '1');
    $('#content').css('transition', '.2s');
  }
});

