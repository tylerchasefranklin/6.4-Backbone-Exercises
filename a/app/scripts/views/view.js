var Backbone = require('backbone');
var $ = require('jquery');
var models = require('../models/blog');



var FormView = Backbone.View.extend({
  events: {
    'submit': 'makePost'
  },
  makePost: function(e){
    e.preventDefault();

    var makeTitle = $('.title').val();
    var makeText = $('.text').val();
    var newPost = {
      title: makeTitle,
      text: makeText
    };
    this.collection.create(newPost);

    $('.title').val('');
    $('.text').val('');
  }
});

module.exports = {
  FormView: FormView
};
