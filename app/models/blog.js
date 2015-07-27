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
    * The title of the blog.
    *
    * @property title
    * @type {String}
    * @default ""
    */
    title: DS.attr('string'),

    /**
    * The title of the blog.
    *
    * @property title
    * @type {String}
    * @default ""
    */
    message: DS.attr('string'),

    /**
    * The blog creation date.
    *
    * @property creationDate
    * @type {Date}
    * @default ""
    */
    creationDate: DS.attr('date'),

    /**
    * The blog owner.
    *
    * @property owner
    * @type {Object}
    * @default "{}"
    */
    owner: DS.attr(),
});
