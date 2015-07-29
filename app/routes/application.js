/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import Ember from 'ember';

export default Ember.Route.extend({

    /**
    * The possible actions the application controller can do.
    *
    * @property actions
    * @type {Object}
    */
    actions: {

        /**
        * Methd that performs a logout from the application.
        * After the logout is complete the application will be redirected
        * to the authentication page.
        *
        * @method logout
        */
        logout: function() {
            localStorage.setItem('user_id', null);
            localStorage.setItem('session_id', null);
            localStorage.setItem('isAuthenticated', false);
            localStorage.setItem('username', '');
            this.transitionTo('authentication');
        },

        /**
        * Errors will be intercepted by this action.
        * In case of an unauthorized error status, the transition that was
        * attemped will be saved and the user will be redirected to the
        * authentication page.
        *
        * @method error
        * @param {Object} error the intercepted error.
        * @param {Object} transition the transition that was attemped the the error happened.
        * @return {Boolean} Returns true in case the error was not handled.
        */
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
