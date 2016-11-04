var $ = require('jquery');
var Backbone = require('backbone');

var Blog = Backbone.Model.extend({

});


var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/blogs/',
  parse: function(blogCollection){
    return blogCollection;
  }
});


module.exports = {
  'Blog': Blog,
  'BlogCollection': BlogCollection
};
