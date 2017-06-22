import Ember from 'ember';

export default Ember.Component.extend({
  inRide: false,
  session:Ember.inject.service(),
  actions:{
    cancel(){
      this.set('inRide',false),
      this.set('to','')
    },
    showNewRide(){
      this.set('inRide',true)
    },
    newRide(){
      var params = {
        user: this.get('user'),
        rider: this.get('rider'),
        to: this.get('to'),
        amountCharged:''
      };
       this.sendAction('newRide',params);
    }
  }
});
