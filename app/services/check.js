import Ember from 'ember';

export default Ember.Service.extend({
  user:'undefined',
  rider:'undefined',
  session : Ember.inject.service(),
});
