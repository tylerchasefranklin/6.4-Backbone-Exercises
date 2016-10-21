var Backbone = require('backbone');
var $ = require('jquery');
var views = require('../views/view');

var Blog = Backbone.Model.extend({

});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/blog'
});




module.exports = {
  Blog: Blog,
  BlogCollection: BlogCollection
};
