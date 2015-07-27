import ApplicationAdapter from 'blogr/adapters/application';

/**
 * User Adapters.
 *
 * @class UserAdapter
 * @constructor
 */
export default ApplicationAdapter.extend({
    pathForType: function() {
        return 'user';
    }
});
