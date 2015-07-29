import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Pages route.
 *
 * @class pagesBlogsRoute
 * @constructor
 */
export default SessionRoute.extend({
    //TODO: implement pagination
    model: function(params) {
        console.log(params);
    }
});
