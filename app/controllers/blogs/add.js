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

    /**
    * Object that contains all the possible actions the control can perform.
    *
    * @property actions
    * @type {Object}
    */
    actions: {

        /**
        * Action method that will create a new blog, unless the blog does not have
        * a valid title or message.
        *
        * @method submitBlog
        */
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

        /**
        * Action method that cancel the addition of a blog.
        *
        * @method cancel
        */
        cancel: function() {
            this.transitionToRoute('blogs');
            this.send('resetFields');
        },

        /**
        * Action method that reset the fields of the form.
        * It sets all the fields to ''
        *
        * @method resetFields
        */
        resetFields: function() {
            this.set('title', '');
            this.set('message', '');
        }
    }
});
