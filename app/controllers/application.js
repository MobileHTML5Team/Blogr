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
    * isAuthenticated will verify if a user has already authenticated in the application.
    *
    * @property isAuthenticated
    * @type {Boolean}
    * @default "false"
    */
    isAuthenticated: function() {
        return localStorage.getItem('isAuthenticated') && localStorage.getItem('isAuthenticated') === 'true';
    }.property('currentPath'),

    /**
    * The name of the user that is already identified.
    * If the user is not already identied in the application it will return undefined.
    *
    * @property username
    * @type {String}
    * @default "undefined"
    */
    username: function() {
      return localStorage.getItem('username');
    }.property('currentPath')
});
