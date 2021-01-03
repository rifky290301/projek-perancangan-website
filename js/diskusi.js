$(document).ready(function () {
  $("#area").hide();
  $("#balas").click(function (event) {
    $("#area").toggle();
    event.preventDefault();
  });

});

// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 500) {
//     $('#tombol').css('position', 'fixed');
//     $('#tombol').css('left', '2rem');
//     $('#tombol').css('bottom', '5rem');
//     // $('#teks-bar').css('color', 'black');
//   } else {
//     $('#tombol').css('position', 'unset');
//     // $('#teks-bar').css('color', 'white');
//   }
// });