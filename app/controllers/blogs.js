/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import Ember from 'ember';

export default Ember.ArrayController.extend({
    /**
    * The url parameters.
    *
    * @property queryParams
    * @type {Array}
    * @default "['page', 'pageSize']"
    */
    queryParams: ['page', 'pageSize'],

    /**
    * The current page for pagination.
    *
    * @property page
    * @type {Number}
    * @default "1"
    */
    page: 1,

    /**
    * The current page size used in pagination.
    *
    * @property page
    * @type {Number}
    * @default "5"
    */
    pageSize: 5,

    /**
    * The controller actions.
    *
    * @property actions
    * @type {Object}
    */
    actions: {

        /**
        * Action method incharge of decrementing the page property.
        *
        * @method previousPage
        */
        previousPage: function() {
            if(this.get('page') > 1) {
                this.decrementProperty('page');
            }
            this.send('refreshModel');
        },

        /**
        * Action method incharge of incrementing the page property.
        *
        * @method previousPage
        */
        nextPage: function() {
            this.incrementProperty('page');
            this.send('refreshModel');
        }
    }
});
