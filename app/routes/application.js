import Ember from 'ember';

/**
 * Main application route.
 *
 * @class ApplicationRoute
 * @constructor
 */
export default Ember.Route.extend({
    /**
     * Load current session to view.
     *
     * @method setupController
     */
    setupController: function() {
        this.validateUser();
    },

    /**
     * Validates and loads user information.
     *
     * @method validateUser
     */
    validateUser: function() {
        var controller = this.controllerFor('application');
        var userId = localStorage.getItem('user_id');
        if (userId) {
            this.store.find('user', userId).then(function(user) {
                controller.set('user', user);
            });
        }
    },
    actions: {
        /**
         * Close user session and removes user information.
         *
         * @action logout
         */
        logout: function() {
            // Removing user
            this.controllerFor('application').set('user', null);
            // removing local-storege session
            localStorage.removeItem('user_id');
            localStorage.removeItem('session_id');
            this.transitionTo('index');
        },

        /**
         * Validates current session.
         *
         * @action validateUser
         */
        validateUser: function() {
            this.validateUser();
        }
    }
});
