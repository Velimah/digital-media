$('button').on('click', function() {
  $('h2:eq(0)').text('select your favourite colour among the colours');
  $('img:eq(0)').attr('src', "red.jpg");
  $('img:eq(1)').attr('src', "blue.jpg");
  $('img:eq(2)').attr('src', "yellow.jpg");
  $('h2:eq(1)').text('your favourite colours in order');
});

$('img:eq(0)').on('click', function() {
  $('img:eq(0)').css({display:'none'});
  $('ul:eq(0)').append('<li>red</li>');
});
$('img:eq(1)').on('click', function() {
  $('img:eq(1)').css({display:'none'});
  $('ul:eq(0)').append('<li>blue</li>');
});
$('img:eq(2)').on('click', function() {
  $('img:eq(2)').css({display:'none'});
  $('ul:eq(0)').append('<li>yellow</li>');
});

