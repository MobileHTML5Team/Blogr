import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authentication');
  this.route('blogs');
});

Router.reopen({
  rootURL: '/api/'
});


export default Router;
