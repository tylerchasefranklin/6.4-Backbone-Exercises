var $ = require('jquery');
var Backbone = require('backbone');
var models = require('../models/contacts');

var ContactFormView = Backbone.View.extend({
  events: {
    'submit': 'makeContact'
  },
  makeContact: function(e){
    e.preventDefault();

    var makeFirstName = $('.first-name').val();
    var makeLastName = $('.last-name').val();
    var makeEmail = $('.e-mail').val();
    var makeAddress = $('.address').val();
    var makePhoneNumber = $('.phone-number').val();
    var newContact = {
      firstname: makeFirstName,
      lastname: makeLastName,
      email: makeEmail,
      address: makeAddress,
      phonenumber: makePhoneNumber
    };
    this.collection.create(newContact);

    $('.first-name').val('');
    $('.last-name').val('');
    $('.e-mail').val('');
    $('.address').val('');
    $('.phone-number').val('');
  }

});

module.exports = {
  ContactFormView: ContactFormView
};
