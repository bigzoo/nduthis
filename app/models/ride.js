import DS from 'ember-data';

export default DS.Model.extend({
  rider: DS.belongsTo('rider'),
  user: DS.belongsTo('user'),
  to: DS.attr(),
  // startingPoint: DS.attr(),
  // endingTo: DS.attr(),
  amountCharged: DS.attr()
});
