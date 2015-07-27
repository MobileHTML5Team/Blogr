import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        if(!localStorage.getItem('session_id') || localStorage.getItem('session_id') == "null") {            
            return Ember.RSVP.reject({
                status: 'Unauthorized',
                message: 'Login to see this page'
            });
        }
    },
    model: function() {
        return this.store.findAll('blog');
    }
});
