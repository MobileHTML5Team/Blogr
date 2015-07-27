import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        logout: function() {
            localStorage.setItem('user_id', null);
            localStorage.setItem('session_id', null);
            localStorage.setItem('isAuthenticated', false);
            localStorage.setItem('username', '');
            this.transitionTo('authentication');
        },
        error: function(error, transition) {
            if(error.status === 'Unauthorized') {
                var authenticationController = this.controllerFor('authentication');
                authenticationController.setProperties({
                    transition: transition
                });

                this.transitionTo('authentication');
            } else {
                return true; //buble up
            }
        }
    }
});
