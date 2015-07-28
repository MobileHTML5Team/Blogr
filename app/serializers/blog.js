/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {

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
        owner: {embedded: 'always'}
    },

    /**
    *  Method that will normalize the payload, in order to be compatible with
    * the emberjs format.
    *
    * @method normalizePayload
    * @param payload the payload
    * @return {Object} Returns the normalized payload.
    */
    normalizePayload: function(payload) {
        payload = payload instanceof Array ? payload : [payload];
        return {
            'blog' : payload
        };
    },

    /**
    * Method that removes the model name from ember data JSON response.
    *
    * @method serializeIntoHash
    * @param hash the hash
    * @param type the type
    * @param record the record
    * @param options the options
    */
    serializeIntoHash: function(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    }
});
