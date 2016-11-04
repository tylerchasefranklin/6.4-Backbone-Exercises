var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/blogs');
var views = require('./views/blogview');

var BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'getBlog'
  },
  initialize: function(){
    this.collection = new models.BlogCollection();
    this.collection.fetch();
  },
  index: function(){
    var blogList = new view.BlogListView({collection: this.collection});
  },
  getBlog: function(){
  
  }
});

var router = new BlogRouter();

module.exports = router;
