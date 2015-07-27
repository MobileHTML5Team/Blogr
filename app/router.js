import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authentication');
  this.resource('blogs', function(){
      this.route('view', {path: '/:id'});
  });
});

Router.reopen({
  rootURL: '/api/'
});


export default Router;
