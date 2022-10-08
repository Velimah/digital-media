// card hover animation functions
$('.card').mouseenter(mouseEnterCard);

function mouseEnterCard() {

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

}


$('.card').mouseleave(mouseLeaveCard);

function mouseLeaveCard() {

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

}

// modal opening animation
$('.card').click(function (){
  $('.modal-content', this).css({opacity: '0', top: '-200px'})
  $('.modal-content', this).stop().animate({
    opacity: '1',
    top: '0'
  }, 400);

})

// navbar hover animation fucntions.
$('.nav-link').mouseenter(mouseEnterNavLink);

function mouseEnterNavLink() {

  $(this).css({textShadow: '1px 1px 1px #000000', borderBottomStyle: 'solid'});

  $(this).stop().animate({
    borderWidth: '3px'
  }, 150);

}

$('.nav-link').mouseleave(mouseLeaveNavLink);

function mouseLeaveNavLink() {

  $(this).css({textShadow: 'none', borderBottomStyle: 'none'});

  $(this).stop().animate({
    borderWidth: '1px'
  }, 100);

}

// modal button hover animation functions
$('.close').mouseenter(mouseEnterModalButton);

function mouseEnterModalButton() {

  $(this).css({backgroundColor: '#E05B75FF'});

}

$('.close').mouseleave(mouseLeaveModalButton);

function mouseLeaveModalButton() {

  $(this).css({backgroundColor: '#E7D2D8FF'});

}

// change padding on top if vertical navigation menu is open
let x = 0
$('.navbar-toggler').click(clickNavBarButton);

function clickNavBarButton() {
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
}

/*
// showing/hiding elements on scrolling.
$(document).scroll(function () {

  let y = $(this).scrollTop();

  if (y < 300) {
    $('#web-section').stop().fadeTo(200, 0)

  }
  else {
    $('#web-section').stop().fadeTo(200, 1)

  }

  if (y < 1100) {
    $('#media-section').stop().fadeTo(200, 0)

  }
  else {
    $('#media-section').stop().fadeTo(200, 1)

  }

});

 */
