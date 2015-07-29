/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    /**
    * The rest namespace.
    *
    * @property namespace
    * @type {String}
    * @default "api"
    */
    namespace: 'api',

    /**
    * The query headers.
    *
    * @property headers
    * @type {Array}
    */
    headers: {
        'session_id': localStorage.getItem('session_id')
    },

    /**
    * The host address.
    *
    * @property host
    * @type {String}
    * @default "http://blogr-api.herokuapp.com"
    */
    host: 'http://blogr-api.herokuapp.com',

    /**
    * Custom path.
    *
    * @property pathForType
    * @type {String}
    * @default "user"
    */
    pathForType: function() {
        return 'user';
    }
});
