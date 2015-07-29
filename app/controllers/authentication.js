/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import Ember from 'ember';

export default Ember.Controller.extend({

    /**
    * Property that contains the transition the user was attempting to access
    * before being send to authentication.
    *
    * @property transition
    * @type {Object}
    * @default "null"
    */
    transition: null,

    /**
    * The error message that will be displayed in case of error.
    *
    * @property errorMessage
    * @type {String}
    * @default ""
    */
    errorMessage: '',

    /**
    * Object that contains all the possible actions the control can perform.
    *
    * @property actions
    * @type {Object}
    */
    actions: {

        /**
        * Action that will perform the login.
        * In case of empty username or password an error indicating that will be
        * set as the errorMessage. In case the password or the username are wrong
        * and error of Invalid credentials will be set as the errorMessage.
        * If the authentication is successful 4 items will be stored inside the
        * localStorage: user_id, session_id, isAuthenticated (which will be set
        * to true) and username.
        *
        * @method login
        * @return {Boolean} Returns true on success
        */
        login: function() {
            var user = this.get('username');
            var pass = this.get('password');
            if(!user) {
                this.set('loginFailed', true);
                this.set('errorMessage', 'Insert your username please');
                return;
            }
            if(!pass) {
                this.set('loginFailed', true);
                this.set('errorMessage', 'Insert your password please');
                return;
            }
            var that = this;
            Ember.$.post( "http://blogr-api.herokuapp.com/login", {
                'username': user,
                'password': pass
            }).done( function(response) {
                localStorage.setItem('user_id', response.user_id);
                localStorage.setItem('session_id', response.session_id);
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('username', user);
                var previousTransition = that.get('transition');
                if (previousTransition) {
                    that.set('previousTransition', null);
                    previousTransition.retry();
                } else {
                    that.transitionToRoute('index');
                }
            }).fail( function() {
                that.set('loginFailed', true);
                that.set('errorMessage', 'Invalid credentials.');
            });
        }
    }
});
