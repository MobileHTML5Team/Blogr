/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    /**
    * All the attributes that will be serialized must be listed here.
    *
    * @property attrs
    * @type {Object}
    */
    attrs: {
        /**
        * The id of the blog.
        *
        * @property id
        * @type {String}
        * @default "blog_id"
        */
        id: 'blog_id',

        /**
        * The title of the blog.
        *
        * @property title
        * @type {String}
        * @default "title"
        */
        title: 'title',

        /**
        * The message of the blog.
        *
        * @property message
        * @type {String}
        * @default "title"
        */
        message: 'message',

        /**
        * The creation date of the blog.
        *
        * @property creationDate
        * @type {String}
        * @default "creation_date"
        */
        creationDate: 'creation_date',

        /**
        * The owner of the blog.
        *
        * @property owner
        * @type {Object}
        */
        owner: DS.attr(),
    },
    normalizePayload: function(payload) {
        payload = payload instanceof Array ? payload : [payload];
        return {
            'blog' : payload
        };
    }
});
