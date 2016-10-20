var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/blog');
var views = require('./views/view');


$(function(){
  var blogCollection = new models.BlogCollection();

  var formView = new views.FormView({collection: blogCollection});
  formView.setElement($('.submit')[0]);

  blogCollection.fetch().then(function(){
    console.log(blogCollection);
  });


});
