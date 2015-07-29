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
    * Method that will be called before the model is instantiated.
    * If the user is not authenticated, an error of status Unauthorized and the
    * message you need to login to see this page will be displayed.
    *
    * @method methodName
    * @return {Object} Returns an error in case the user is not authenticated.
    */
    beforeModel: function() {
        if(!localStorage.getItem('session_id') || localStorage.getItem('session_id') == "null") {
            return Ember.RSVP.reject({
                status: 'Unauthorized',
                message: 'You need to login to see this page'
            });
        }
    },

    /**
    * Model hook that will fetch the blogs, based on the
    * page object passed through as a query parameter.
    *
    * @method model
    * @return {Array} Returns an array with all the blogs.
    */
    model: function(params) {
        if(params.page){
            var page = params.page;
            // avoid page numbers to be trolled i.e.: page=string, page=-1, page=1.23
            page = isNaN(page) ? 1 : Math.floor(Math.abs(page));
            this.set('page', page);
        }
        return this.store.findQuery('blog', params);
    },

    /**
    * The router actions.
    *
    * @property actions
    * @type {Object}
    */
    actions: {
        /**
        * Action method that refresh the model.
        * Usually this method will be called when the pagination changed.
        *
        * @method refreshModel
        */
        refreshModel: function() {
            this.refresh();
        }
    }
});
