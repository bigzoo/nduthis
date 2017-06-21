import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    registerNewUser(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    },
    registerNewRider(params){
      var newRider = this.store.createRecord('rider', params);
      newRider.save();
    }
  }
});
