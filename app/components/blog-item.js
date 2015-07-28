import Ember from 'ember';

export default Ember.Component.extend({
    label: function() {
        var blog = this.get('blog');
        var message = blog.get('message');
        message = message.length < 5 ? message : message.substring(0, 5) + '...';
        var title = blog.get('title');
        var owner = blog.get('owner') ? blog.get('owner').get('firstName') : 'undefined';
        var label = title + ' - ' + message + ' (' + owner + ')';
        return label;
    }.property('blog.owner')
});
