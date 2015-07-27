import Ember from 'ember';

export default Ember.Controller.extend({
    isAuthenticated: function() {
        return localStorage.getItem('isAuthenticated') && localStorage.getItem('isAuthenticated') === 'true';
    }.property('currentPath'),
    username: function() {
      return localStorage.getItem('username');
    }.property('currentPath')    
});
