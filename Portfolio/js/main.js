// card hover animation
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

// modal opening animation. Clicks go for some reason through child elements, making animation start again when clicking popup content.
// Console shows click target always as .card class.
/*
$('.card').click(function (){
    console.log(this)
    $('.modal-content', this).css({opacity: '0', top: '-200px'})
    $('.modal-content', this).stop().animate({
      opacity: '1',
      top: '0'
    }, 400);

})
*/

// modal opening animation. Workaround that works only once as the code above is not working.
$('.card').click(function (){

  $('.modal-content', this).stop().animate({
    opacity: '1',
    top: '0'
  }, 400);

})

// navbar hover animation
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

// modal button hover animation
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

// changes navbar color on scrolling. For some reason doesn't work on firefox.
$(document).scroll(function () {

  let y = $(this).scrollTop();

  if ( y < 100) {
    $('.navbar').css({
      backgroundColor: "#e38093",
      boxShadow: "0 0 5px #e38093"
    })
  }

  else if (y < 1200) {
    $('.navbar').css({
      backgroundColor: "#fafafa",
      boxShadow: "0 0 5px #fafafa"
    })
  }

  else {
    $('.navbar').css({
      backgroundColor: "#e38093",
      boxShadow: "0 0 5px #e38093"
    })
  }

});
