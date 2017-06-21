import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: true,
  session: Ember.inject.service(),
  actions:{
    closeModalDialog(){
      this.set('isShowingModal', false)
    },
    newRide(params){
      var newRide = this.store.createRecord('ride',params);
      var rider = params.rider;
      var user = params.user
      rider.get('rides').addObject(newRide);
      user.get('rides').addObject(newRide);
      newRide.save().then(function () {
        return rider.save().then(function () {
          user.save();
        })
      });
      //this.transitionTo('book');
    }
  }
});
