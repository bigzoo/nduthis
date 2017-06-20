import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions:{
    newUser(){
      var params = {
        id: this.get('id'),
        name: this.get('name'),
        email: this.get('session.data.authenticated.profile.email')
      };
      this.sendAction('registerNewUser',params),
      this.set('id',''),
      this.set('names','')
    }
  }
});
