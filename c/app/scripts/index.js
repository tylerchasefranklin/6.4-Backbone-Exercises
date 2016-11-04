var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/blogs');
var views = require('./views/blogview');
var BlogCollection = require('./models/blogs').BlogCollection;


$(function(){
  var blogCollection = new BlogCollection([
    {'title': 'Blah Blah Blah', 'content': 'Blee Blee Blee'},
    {'title': 'Blah Blah Blah', 'content': 'Blee Blee Blee'}
  ]);
  console.log(blogCollection);

  var blogView = new views.BlogListView({collection: blogCollection});

  blogCollection.fetch().then(function(){
    // console.log(blogCollection);
  });

});
