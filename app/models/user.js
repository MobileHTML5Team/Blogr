/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import DS from 'ember-data';

export default DS.Model.extend({

    /**
    * The user username.
    *
    * @property title
    * @type {String}
    * @default ""
    */
    username: DS.attr('string'),

    /**
    * The user first name.
    *
    * @property title
    * @type {String}
    * @default ""
    */
    firstName: DS.attr('string'),

    /**
    * The user last name.
    *
    * @property title
    * @type {String}
    * @default ""
    */
    lastName: DS.attr('string')
});
