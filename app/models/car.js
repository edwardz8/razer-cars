import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hp: DS.attr('integer'),
  year: DS.attr('integer'),
  price: DS.attr('integer')
});
