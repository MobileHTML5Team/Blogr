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
    * The model for a single blog view.
    *
    * @property model
    * @type {Object}
    */
    model: function(params) {
        return this.store.find('blog', params.blogId);
    }
});
