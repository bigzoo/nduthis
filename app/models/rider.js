import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  phoneNo: DS.attr(),
  plates: DS.attr(),
  photoUrl: DS.attr(),
  location: DS.attr('number'),
  status: DS.attr(),
  rides: DS.hasMany('ride',{async:true})
});
