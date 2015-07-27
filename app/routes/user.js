import Ember from 'ember';

/**
 * Handles user routes.
 *
 * @class UserRoute
 * @constructor
 */
export default Ember.Route.extend({
    beforeModel: function(transition) {
        if (!localStorage.getItem('user_id')) {
            var controller = this.controllerFor('application');
            controller.set('transition', transition);
            this.transitionTo('login');
        }
    },
    model: function() {
        var userId = localStorage.getItem('user_id');
        return this.store.find('user', userId);
    }
});
