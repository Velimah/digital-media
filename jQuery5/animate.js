$('a:eq(0)').click(function() {
  if (this.hash !== "") {
    event.preventDefault();

    $('#container').css({display: 'flex', flexDirection: 'horizontal', width: '200vw'})

    let hash = this.hash;

    $('html, body').animate({
      scrollLeft: $(hash).offset().left
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

$('a:eq(1)').click(function() {
  if (this.hash !== "") {
    event.preventDefault();

    $('#container').css({display: 'flex', flexDirection: 'horizontal', width: '200vw'})

    let hash = this.hash;

    $('html, body').animate({
      scrollLeft: $(hash).offset().left
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

$('nav').mouseenter(function() {
  $('nav').animate({opacity: '1.0'})
});
$('nav').mouseleave(function() {
  $('nav').animate({opacity: '0'})
});

