import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    message: DS.attr('string'),
    creationDate: DS.attr('date'),
    owner: DS.attr(),
});
