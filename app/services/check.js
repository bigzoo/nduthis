import Ember from 'ember';

export default Ember.Service.extend({
  user:'undefined',
  session : Ember.inject.service(),
});
