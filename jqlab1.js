// Add id attribute into the second paragraph
const second = $('p:eq(1)');
console.log(second);
second.attr('id', 'second-p');

// Remove first paragraph
const first = $('p:eq(0)');
first.remove();

// Change the background and font color
$('#fdiv').css({'color':'white', 'background-color':'grey'});

// Add a button
$('#sdiv button').click(function() {
  $('#fdiv').append('<p id="tp">Hello user</p>')
});

// Hide/Show a paragraph
$('#4p').hide();

$('#sdiv').hover(function(){
  $('#4p').show().text('About to select a link...');
  },
    function (){
  $('#4p').hide();
  });