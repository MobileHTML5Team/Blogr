import Ember from 'ember';

/**
 * Helper clas to validate User Session.
 *
 * @class SessionCommonRoute
 * @constructor
 */
export default Ember.Route.extend({
    /**
     * Validate if there is a session.
     *
     * @param transition {Object} current page transition
     */
    beforeModel: function(transition) {
        if (!localStorage.getItem('user_id')) {
            var controller = this.controllerFor('application');
            controller.set('transition', transition);
            this.transitionTo('login');
        }
    }
});
