import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Create blog route.
 *
 * @class CreateBlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     * Gets User Id.
     *
     * @return {String} unique user ID
     */
    getUserId: function () {
        return localStorage.getItem('user_id');
    }
});
