 var AppView = Backbone.View.extend({

	el: '#app-view',
	initialize: function() {

		_.bindAll(
			this,
			'onButtonClick',
			'onAddToCollection'
		);


		this.$textInput = $('#text-input');
		this.$todoList = $('#todo-list');
		var $button = $('#my-button');
		this.messagesCollection = new messagesCollection();

		$button.on('click', this.onButtonClick);
		this.messagesCollection.on('add', this.onAddToCollection);

		this.messagesCollection.fetch();

	},

	render: function() {

	},

	onButtonClick: function() {

		this.listItem = new messageModel();
		console.log(this.listItem);

		this.listItem.set({ 

			message: this.$textInput.val()


		});

		this.listItem.save();

		this.messagesCollection.add(this.listItem);
		this.$textInput.val('');
	},

	onAddToCollection: function(listItem) {
		var newListView = new listView({model: listItem});
		console.log(newListView);
		console.log(this);
		this.$todoList.append(newListView.$el);
		
	}

});


//initial code
// 	onAddButtonClick: function() {
		
// 		$.post(
// 			'http://tiny-pizza-server.herokuapp.com/collections/pkokotodo',
// 			{
// 				message: $('#description').val(),
// 			},
// 			function(message) {
// 				console.log(message)
// 			},
// 			'json'
// 		);

// 		$('#list').append("<br>" + this.$descriptionBox.val());
// 		$('<input type="checkbox" value=1 id="myCheckbox"/>').appendTo('#list');

// 	},
	
// 	onCheckBoxClick: function() {
// 		$('#myCheckbox').prop('checked', true);
// 		$('#myCheckbox').prop('checked', false); 	
// 		if ('#myCheckbox' == true) {
// 			$('#list').css('textDecoration','line-through');
// 		}

//     }
// });

