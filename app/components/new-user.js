import Ember from 'ember';

export default Ember.Component.extend({
  addNewUser: false,
  session: Ember.inject.service(),
  actions:{
    addNewUser(){
      this.set('addNewUser',true)
    },
    resetForm(){
      this.set('id',''),
      this.set('name','')
    },
    cancelForm(){
      this.set('addNewUser',false),
      this.set('id',''),
      this.set('name','')
    },
    newUser(){
      var params = {
        idNumber: this.get('id'),
        name: this.get('name'),
        email: this.get('session.data.authenticated.profile.email')
      };
      this.sendAction('registerNewUser',params),
      this.set('id',''),
      this.set('name',''),
      this.set('addNewUser',false)
    }
  }
});
