

// function to add times
// function --maybe button-- to remove items


// submit button

$('.button').click(function(e) {
  console.log('clicked!');
  $('.list').first().append($('<li>', {
  	text: $('.input').val()
  }))
   	console.log('New item added');

  $('.input').val('');
  console.log('Input Cleared')

});
