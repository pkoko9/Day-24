 var AppView = Backbone.View.extend({
 	el: '#app-view',
	initialize: function(){

		_.bindAll(
			this,
			'onAddButtonClick'
			// 'onCheckBoxClick'
		);

		this.$descriptionBox = $('#description');
		this.$addButton = $('#add-button');
		this.$addButton.on('click',this.onAddButtonClick);
	},
	onAddButtonClick: function() {
		
		$.post(
			'http://tiny-pizza-server.herokuapp.com/collections/pkokotodo',
			{
				message: $('#description').val(),
			},
			function(message) {
				console.log(message)
			},
			'json'
		);

		$('#list').append("<br>" + this.$descriptionBox.val());
		$('<input type="checkbox" value=1 id="myCheckbox"/>').appendTo('#list');

	},
	
	onCheckBoxClick: function() {
		$('#myCheckbox').prop('checked', true);
		$('#myCheckbox').prop('checked', false); 	
		if ('#myCheckbox' == true) {
			$('#list').css('textDecoration','line-through');
		}

    }
});


// $('#post').on('click', onPostButtonClick);

// 	function onPostButtonClick() {
		
// 		console.log($('#message').val());
// 		var response = $('#message').val();
	

// 	$.post(
// 			'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
// 			{
// 				message: response,
// 				name: 'Paul'
// 			},
// 			function(message) {
// 				console.log(message)
// 			// render(messages);
// 			},
// 			'json'
// 		);
// 	}

