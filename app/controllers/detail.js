import Ember from 'ember';

/**
 * Blog detail's controller.
 *
 * @class BlogDetailController
 * @constructor
 */
export default Ember.ObjectController.extend({
    /**
     * Creates a short message from title.
     * Title computed property.
     */
    shortMessage: function() {
        var title = this.get('message');
        return (title.length < 10) ? title : title.substring(0, 7) + '...';
    }.property('message')
});
