var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/contacts');
var views = require('./views/view');

//DOM is ready!! :)
$(function(){

var contactCollection = new models.ContactCollection();

var formView = new views.ContactFormView({collection: contactCollection});
formView.setElement($('.submit')[0]);

contactCollection.fetch().then(function(){
  console.log(contactCollection);
});




});
