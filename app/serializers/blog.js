import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    attrs: {
        id : 'blog_id',
        title: 'title',
        message: 'message',
        creationDate: 'creation_date',
        owner: DS.attr(),
    },
    normalizePayload: function(payload) {
        payload = payload instanceof Array ? payload : [payload];
        return {
            'blog' : payload
        };
    }
});
