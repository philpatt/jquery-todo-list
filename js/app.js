

$('#addItem').click(function() {
	console.log('clicked!');
	// console.log(listItem);
	var listItem = $('#listItem').val();


	$('#list').append($('<li class="items" id=' + listItem + '>' + listItem +'</li>'))
	$('#listItem').val('')

	$('.items').on('click', function(){
		this.remove();
	})
})
 

   	// console.log('New item added');


  




