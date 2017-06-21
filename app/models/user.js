import DS from 'ember-data';

export default DS.Model.extend({
  idNumber: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  rides: DS.hasMany('ride',{async:true})
});
