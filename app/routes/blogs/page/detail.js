import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Detail blog route.
 *
 * @class DetailBlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     * Load a blog by Id.
     *
     * @param params {Object} URL parameters
     */
    model: function(params) {
        var blogId = params.blogId;
        this.controllerFor('blogs').set('blogId', blogId);
        return this.store.find('blog', blogId);
    }
});
