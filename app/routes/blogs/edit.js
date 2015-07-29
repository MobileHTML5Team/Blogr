import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Create blog route.
 *
 * @class CreateBlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    model: function(params) {
        return this.store.find('blog', params.blogId);
    },
    setupController: function(controller, model) {
        controller.set('title', model.get('title'));
        controller.set('message', model.get('message'));
        controller.set('blog', model);
    }
});
