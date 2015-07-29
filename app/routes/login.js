import Ember from 'ember';

/**
 * Handles login routes.
 *
 * @class LoginRoute
 * @constructor
 */
export default Ember.Route.extend({
    actions: {
        /**
         * Verify if credential are valid otherwire redirect to home page.
         *
         * @param credential {Object} users credential
         */
        login: function(credential) {
            var self = this;
            var url = 'http://blogr-api.herokuapp.com/login';
            Ember.$.ajax({
                method: 'POST',
                url: url,
                data: credential
            }).done(function(response) {
                localStorage.setItem('user_id', response['user_id']);
                localStorage.setItem('session_id', response['session_id']);

                // application action
                self.send('validateUser');

                var controller = self.controllerFor('application');
                var previousTransition = controller.get('transition');
                if (previousTransition) {
                    controller.set('transition', null);
                    previousTransition.retry();
                } else {
                    self.transitionTo('index');
                }
            }).fail(function(e) {
                console.error(e.responseText);
                var controller = self.controllerFor('login');
                controller.set('errorMessage', e.responseText);
            });
        }
    }
});
