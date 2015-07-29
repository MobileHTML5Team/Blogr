import DS from 'ember-data';

/**
 * Blog's model.
 *
 * @class UserModel
 * @constructor
 */
export default DS.Model.extend({
    title: DS.attr(),
    message: DS.attr(),
    creationDate: DS.attr('date'),
    owner: DS.belongsTo('user')
});
