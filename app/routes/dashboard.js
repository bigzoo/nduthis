import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),
  check: Ember.inject.service(),
  model() {
    var checkU = this.get('check');
    var session = this.get('session.data.authenticated.profile.email');
    return this.store.query('rider', {
      orderBy: 'email',
      equalTo: this.get('session.data.authenticated.profile.email')
    }).then(function(user) {
      if (user.get('length') === 1) {
        Ember.set(checkU, 'rider', 'rider');
      } else if(user.get('length')!==1){
        Ember.set(checkU, 'rider', 'Not a rider. Sent to registration.');
      }
    })
  },
  afterModel() {
    var checkU = this.get('check');
    if (checkU.user === 'user') {
      this.transitionTo('dashboard.user');
    }else if (checkU.rider === 'rider') {
      this.transitionTo('dashboard.rider');
    }else {
      this.transitionTo('register');
    }
  }
});
