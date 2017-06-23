import Ember from 'ember';

export default Ember.Controller.extend({
   isShowingModal: true,
   actions:{
     closeModalDialog(){
      this.set('isShowingModal', false)
    },
   }
});
