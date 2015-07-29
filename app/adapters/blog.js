import ApplicationAdapter from 'blogr/adapters/application';

/**
 * Blog Adapters.
 *
 * @class BlogAdapter
 * @constructor
 */
export default ApplicationAdapter.extend({
    /**
     * builds blog's url API.
     *
     * @param modelName {String} model name
     * @param id {String} single id or array of ids or query
     * @param snapshot {Array} single snapshot or array of snapshots
     * @param requestType {String} store function's name
     */
    buildURL: function(modelName, id, snapshot, requestType) {
        var url = this.get('host') + '/' + this.get('namespace') + '/';
        if (requestType === 'createRecord') {
            url += 'user/{0}/blog'.replace('{0}', this.getUserId());
        } else {
            url += 'blog';
        }
        url += (id) ? '/' + id : '';
        return url;
    }
});
