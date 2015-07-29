import Ember from 'ember';

/**
 * Blog's controller.
 *
 * @class BlogController
 * @constructor
 */
export default Ember.ArrayController.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Blog\'s List',

    /**
     * Sort property.
     *
     * @type {Array}
    */
    sortProperties: ['creationDate'],

    /**
     * Object controller.
     *
     * @type {String} controller name
     */
    itemController: 'detail',

    /**
     * Pagination size.
     *
     * @type {Number}
     */
    pageSize: 5,

    /**
     * Pagination page.
     *
     * @type {Number}
     */
    pageId: 1,

    /**
     * Pagination size.
     *
     * @type {Number}
     */
    paginationSize: 1,

    /**
     * Default blog's ID.
     *
     * @type {Number}
     */
    blogId: null,

    /**
     * Sort direction.
     *
     * @type {Boolean}
    */
    sortAscending: false,
    actions: {
        /**
         * Changes blog page.
         *
         * @param blogId {Number} blog unique identifier
         */
        changeBlog: function(blogId) {
            var pageId = this.get('pageId');
            this.transitionTo('blogs.page.detail', pageId, blogId);
        },

        /**
         * Redirect to previous page.
         *
         * @action previous
         */
        previous: function() {
            var pageId = parseInt(this.get('pageId')) - this.get('paginationSize');
            this.send('changePage', pageId);
        },

        /**
         * Redirect to next page.
         *
         * @action next
         */
        next: function() {
            var pageId = parseInt(this.get('pageId')) + this.get('paginationSize');
            this.send('changePage', pageId);
        },

        /**
         * Change current page.
         *
         * @param pageId {Number} page id
         * @action changePage
         */
        changePage: function(pageId) {
            if (!pageId) {
                throw new Error('pageId is undefined');
            }
            this.set('pageId', pageId);
            var blogId = parseInt(this.get('blogId'));
            if (blogId) {
                this.transitionToRoute('blogs.page.detail', pageId, blogId);
            } else {
                this.transitionToRoute('blogs');
            }
            this.get('target.router').refresh();
        }
    }
});
