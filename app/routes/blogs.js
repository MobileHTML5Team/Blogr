import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Handles blog routes.
 *
 * @class BlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     *	Load existent blogs by pages.
     *
     * @param params {Object} URL parameters
     * @return a list of blogs
     */
    model: function(params) {
        var blogController = this.controllerFor('blogs');
        return this.store.find('blog', {
            pageSize: blogController.get('pageSize'),
            page: blogController.get('pageId')
        });
    }
});
