import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',

    headers: {
        'session_id': localStorage.getItem('session_id')
    },

    host: 'http://blogr-api.herokuapp.com',

    pathForType: function() {
        return 'blog';
    }
});
