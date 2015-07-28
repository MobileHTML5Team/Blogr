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
    isEditionModeOn: false,

    actions: {
        edit: function() {
            this.set('isEditionModeOn', true);
        },

        cancelEdition: function() {
            this.set('isEditionModeOn', false);
        },

        submitEdition: function() {
            var title = this.get('title');
            var message = this.get('message');
            if(!title) {
                this.set('editionFailed', true);
                this.set('errorMessage', 'Insert a title please');
                return;
            }
            if(!message) {
                this.set('editionFailed', true);
                this.set('errorMessage', 'Insert a message please');
                return;
            }
            this.set('isEditionModeOn', false);
            alert('not supported yet');
        },

        confirmDeletion: function() {
            this.set('needsDeleteConfirmation', true);
        },

        delete: function() {
            this.set('needsDeleteConfirmation', false);
            alert('not supported yet');
        },

        cancelDeletion: function() {
            this.set('needsDeleteConfirmation', false);
        }
    }
});
