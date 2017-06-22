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
      this.set('name',''),
      this.set('number','')
    },
    cancelForm(){
      this.set('addNewUser',false),
      this.set('id',''),
      this.set('name',''),
      this.set('number','')
    },
    newUser(){
      var params = {
        idNumber: this.get('id'),
        name: this.get('name'),
        number: this.get('number'),
        email: this.get('session.data.authenticated.profile.email')
      };
      this.sendAction('registerNewUser',params),
      this.set('id',''),
      this.set('name',''),
      this.set('number',''),
      this.set('addNewUser',false)
    }
  }
});
