import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  subscribed: true,
  actions:{
    subscribe(){
      this.set('subscribed',false)
    }
  }
});
