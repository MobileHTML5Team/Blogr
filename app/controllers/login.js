import Ember from 'ember';

/**
* Handles login views.
*
* @class LoginController
* @constructor
*/
export default Ember.Controller.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Login controller',

    /**
     * Display login errors.
     *
     * @type {Syting}
    */
    errorMessage: null,

    /**
     * Default user credentials.
     *
     * @type {Object}
     */
    credential: {
        username: null,
        password: null
    },
    actions: {
        /**
         * Validates user credential.
         *
         * @action validateParams
         * @param {Object} user credentials
         */
        validateParams: function(credential) {
            this.get('errorMessage', null);
            try {
                if (!credential.username) {
                    throw new Error('username is empty');
                }
                if (!credential.password) {
                    throw new Error('password is empty');
                }
                this.send('login', credential);
                this.send('clearform');
            } catch (e) {
                console.error(e.message);
                this.set('errorMessage', e.message);
            }
        },

        /**
         * Redirect to home page.
         *
         * @action cancel
         */
        cancel: function() {
            this.transitionTo('index');
        },

        /**
         * Erase login form.
         *
         * @action clearform
         */
        clearform: function() {
            this.set('username', null);
            this.set('password', null);
        }
    }
});
