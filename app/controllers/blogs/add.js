/**
* Copyrigth (c) 2015 by PROS, Inc. All Rights Reserved.
* This software is the confidential and propietary information of
* PROS, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with PROS.
*/
import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        submitBlog: function() {
            var title = this.get('title');
            var message = this.get('message');
            if(!title) {
                this.set('creationFailed', true);
                this.set('errorMessage', 'Insert a title please');
                return;
            }
            if(!message) {
                this.set('creationFailed', true);
                this.set('errorMessage', 'Insert a message please');
                return;
            }

            var blog = this.store.createRecord('blog', {
                title: title,
                message: message
            });
            var that = this;
            blog.save().then(function(response) {
                that.transitionToRoute('blogs.view', response.id);
                that.send('resetFields');
            });
        },

        cancel: function() {
            this.transitionToRoute('blogs');
            this.send('resetFields');
        },

        resetFields: function() {
            this.set('title', '');
            this.set('message', '');
        }
    }
});
