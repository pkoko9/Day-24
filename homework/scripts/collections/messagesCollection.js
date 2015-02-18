var messagesCollection = Backbone.Collection.extend({

  url: 'http://tiny-pizza-server.herokuapp.com/collections/paulk',
  model: messageModel,
});

