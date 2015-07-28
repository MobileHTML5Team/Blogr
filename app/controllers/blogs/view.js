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
    * Property flag that checks if the edition mode is enabled.
    *
    * @property isEditionModeOn
    * @type {Boolean}
    * @default "false"
    */
    isEditionModeOn: false,

    /**
    * Property flag that checks if the user is the owner of the blog.
    *
    * @property isOwner
    * @type {Boolean}
    */
    isOwner: function() {
        var owner = this.get('model').get('owner');
        if(owner) {
            var sessionId = localStorage.getItem('user_id');
            var ownerId = owner.get('id');
            return  ownerId === sessionId;
        }
        return false;
    }.property('currentPath'),

    /**
    * Object that contains all the actions of the controller.
    *
    * @property actions
    * @type {Object}
    */
    actions: {
        /**
        * Action method that starts the edition mode.
        *
        * @method edit
        */
        edit: function() {
            this.set('isEditionModeOn', true);
        },

        /**
        * Action method that cancels the edition mode.
        *
        * @method cancelEdition
        */
        cancelEdition: function() {
            this.set('isEditionModeOn', false);
        },

        /**
        * Action method that saves the edition in case the title and the message
        * had valid values.
        *
        * @method submitEdition
        */
        submitEdition: function() {
            var message = this.get('message');
            if(!message) {
                this.set('editionFailed', true);
                this.set('errorMessage', 'Insert a message please');
                return;
            }
            var id = this.get('id');
            var that = this;
            this.store.find('blog', id).then(function(blog) {
                blog.set('message', message);
                blog.save();
                that.set('isEditionModeOn', false);
            });
        },

        /**
        * Action method that shows the confirm deletion dialog.
        *
        * @method confirmDeletion
        */
        confirmDeletion: function() {
            this.set('needsDeleteConfirmation', true);
        },

        /**
        * Action method that actually deletes the blog.
        *
        * @method delete
        */
        delete: function() {
            var blog = this.get('model');
            blog.deleteRecord();
            blog.save();
            this.set('needsDeleteConfirmation', false);
            this.transitionToRoute('blogs');
        },

        /**
        * Action method that cancels the confim deletion dialog and hides it.
        *
        * @method cancelDeletion
        */
        cancelDeletion: function() {
            this.set('needsDeleteConfirmation', false);
        }
    }
});
