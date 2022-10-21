// card hover animation
$('.card').mouseenter(function () {

  $(this).stop().animate({
    width: '352px',
    height: '198px',
    borderColor: 'black'
  }, 200);

  $('.card-title', this).stop().animate({
    opacity: '1',
    fontSize: '2rem'
  }, 400);

  $('.card-img', this).stop().animate({
    opacity: '0.15'
  }, 300);

});

$('.card').mouseleave(function () {

  $(this).stop().animate({
    width: "320px",
    height: "180px"
  }, 200);

  $('.card-title', this).stop().animate({
    fontSize: '1rem',
    opacity: '0'
  }, 400);

  $('.card-img', this).stop().animate({
    opacity: '1'
  }, 300);

});

// modal opening animation. Clicks go for some reason through child elements, making animation start again when clicking popup content.
// Console.log shows click target always as .card class.
/*
$('.card').click(function (){
    console.log(this)
    $('.modal-content', this).css({opacity: '0', top: '-200px'})
    $('.modal-content', this).stop().animate({
      opacity: '1',
      top: '0'
    }, 400);

});
*/

// modal opening animation. Work around that works only once as the code above is not working properly.
$('.card').click(function () {

  $('.modal-content', this).stop().animate({
    opacity: '1',
    top: '0'
  }, 400);

});

// navbar hover animation
$('.nav-link').mouseenter(function () {

  $(this).css({textShadow: '1px 1px 1px #000000', borderBottomStyle: 'solid'});

  $(this).stop().animate({
    borderWidth: '3px'
  }, 200);

});

$('.nav-link').mouseleave(function () {

  $(this).css({textShadow: 'none', borderBottomStyle: 'none'});

  $(this).stop().animate({
    borderWidth: '1px'
  }, 100);

});

// modal button hover animation
$('.close').mouseenter(function () {

  $(this).css({backgroundColor: '#E05B75FF'});

});

$('.close').mouseleave(function () {

  $(this).css({backgroundColor: '#E7D2D8FF'});

});

// change padding on top if vertical navigation menu is open
let x = 0
$('.navbar-toggler').click(function () {

  if (x === 0) {
    $('body').stop().animate({
      paddingTop: '216px'
    }, 300);
    x++;

  } else {
    $('body').stop().animate({
      paddingTop: '60px'
    }, 300);
    x--;
  }

});

// changes navbar color on scrolling. y2 = position of bottom of the current view.
// When bottom of the view reaches end of the document, colour changes back to red.
$(document).scroll(function () {

  let y = $(window).scrollTop();
  let y2 = y + $(window).height();
  let y3 = $(document).height();

  if (y < 100) {
    $('.navbar').css({
      backgroundColor: "#e38093",
      boxShadow: "0px 5px 10px -10px #e38093"
    });

  } else if (y2 < y3) {
    $('.navbar').css({
      backgroundColor: "#fafafa",
      boxShadow: "0px 5px 10px -10px #000000"
    });

  } else {
    $('.navbar').css({
      backgroundColor: "#e38093",
      boxShadow: "0px 5px 10px -10px #e38093"
    });

  }

});