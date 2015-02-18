var listView = Backbone.View.extend({

	tagName: 'li',

	initialize: function(options) {

		_.bindAll(
		this,
		'onStrikeThrough'
		);

		var Template = _.template($('#list-view').html());
		this.$el.append(Template(this.model.attributes));
		
		this.$checkbox = $(this.$el.find('.check-box'));
		this.$checkbox.on('click', this.onStrikeThrough);
		
	},

	onStrikeThrough: function() {
		this.$el.toggleClass('strike-text');
	},

});




// var PostFormView = Backbone.View.extend({

//         model: new Post.Model.authentication(),
//         el: $("#description"),

//         post: function () {
//             this.model.save({message: this.$el.find("#description"),
                
//             }
//         });        
// });


