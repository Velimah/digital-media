//card hover functions

$('.card').mouseenter(mouseEnter);

function mouseEnter() {

  $(this).stop().animate({
    width: '352px',
    height: '198px',
    borderColor: 'black',
  }, 200);

  $('.card-title', this).stop().animate({
    opacity: '1',
    fontSize: '2rem',
  }, 400);

  $('.card-img', this).stop().animate({
    opacity: '0.15'
  }, 200);

}

$('.card').mouseleave(mouseLeave);

function mouseLeave() {

  $(this).stop().animate({
    width: "320px",
    height: "180px",
  }, 200);

  $('.card-title', this).stop().animate({
    fontSize: '1rem',
    opacity: '0'
  }, 400);

  $('.card-img', this).stop().animate({
    opacity: '1'
  }, 200);

}

// card click function

$('.card').click(clickIcon);

function clickIcon() {
  $(this).stop().css({opacity: '1'})
}

//navbar hover fucntions

$('.nav-link').mouseenter(mouseEnter2);

function mouseEnter2() {

  $(this).css({textShadow: '1px 1px 1px #000000', borderBottomStyle: 'solid'});

  $(this).stop().animate({
    borderWidth: '3px',
  }, 200);

}
$('.nav-link').mouseleave(mouseLeave2);

function mouseLeave2() {

  $(this).css({textShadow: 'none', borderBottomStyle: 'none'});

  $(this).stop().animate({
    borderWidth: '1px',
  }, 100);

}

// modal button hover functions

$('.close').mouseenter(mouseEnter3);

function mouseEnter3() {

  $(this).css({backgroundColor: '#E05B75FF'});

}

$('.close').mouseleave(mouseLeave3);

function mouseLeave3() {

  $(this).css({backgroundColor: '#E7D2D8FF'});

}


