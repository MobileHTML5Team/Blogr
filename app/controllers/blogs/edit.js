import Ember from 'ember';

/**
 * Edit blog controller.
 *
 * @class EditBlogController
 * @constructor
 */
export default Ember.Controller.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Edit blog controller',

    /**
     * Display edit blog's errors.
     *
     * @type {Syting}
    */
    errorMessage: null,
    actions: {
        /**
         *	Update and validated new blog.
         *
         * @action updateBlog
         */
        updateBlog: function() {
            try {
                var fisrtPage = 1;
                var title = this.get('title');
                if (title === '') {
                    throw new Error('title is empty');
                }
                var message = this.get('message');
                if (message === '') {
                    throw new Error('message is empty');
                }
                // saving data
                var blog = this.get('blog');
                blog.set('title', title);
                blog.set('message', message);
                var self = this;
                blog.save()
                .then(function(response) {
                    self.transitionToRoute('blogs.page.detail', fisrtPage, response.get('id'));
                    self.get('target.router').refresh();
                })
                .fail(function(error) {
                    self.set('errorMessage', error.message);
                });
            } catch (e) {
                console.error(e.message);
                this.set('errorMessage', e.message);
            }
        },

        /**
         * Removes a blog.
         *
         * @actions removeBlog
         */
        removeBlog: function() {
            if (confirm('Are you sure you want to remove?')) {
                this.get('blog').destroyRecord();
                this.transitionToRoute('blogs');
                this.get('target.router').refresh();
            }
        },

        /**
         * Redirect to blog's main page.
         *
         * @action cancel
         */
        cancel: function() {
            this.transitionToRoute('blogs');
        }
    }
});
