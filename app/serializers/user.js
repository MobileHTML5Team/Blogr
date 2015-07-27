import DS from 'ember-data';

/**
 * Helper class to change object user format.
 *
 * @class UserSerializers
 * @constructor
 */
export default DS.RESTSerializer.extend({
    /**
     * Ember user's model reference
     *
     * @type {object}
     */
    attrs: {
        id: 'user_id',
        firstName: 'first_name',
        lastName: 'last_name'
    },

    /**
     * Convert API format on ember supported format.
     *
     * @method normalizePayload
     */
    normalizePayload: function (payload) {
        payload = payload instanceof Array ? payload : [payload];
        return {
            'user': payload
        };
    }
});
