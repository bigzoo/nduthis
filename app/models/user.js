import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  name: DS.attr(),
  email: DS.attr()
});
