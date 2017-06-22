import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  check: Ember.inject.service(),
  model() {
    var checkU = this.get('check');
    var session = this.get('session.data.authenticated.profile.email');
    return this.store.query('user', {
      orderBy: 'email',
      equalTo: this.get('session.data.authenticated.profile.email')
    }).then(function(user) {
      console.log(user);
      user.forEach(function (userU) {
        console.log(userU);
      })
      if (user.get('length') === 1) {
        Ember.set(checkU, 'user', 'user');
      } else {
        Ember.set(checkU, 'user', 'Not a user. To be determined by Register route.');
      }
      // console.log(session);
      // console.log(user.get('length'));
      // console.log(checkU.user);
    })
  },
  afterModel() {
    var checkU = this.get('check');
    // console.log(checkU.user);
    if (checkU.user === 'user') {
      this.transitionTo('dashboard.user');
    }else {
      this.transitionTo('register');
    }
  }
});
