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
      if (user.get('length') === 1) {
        Ember.set(checkU, 'user', 'user');
      } else {
        Ember.set(checkU, 'user', 'Not a user. To be determined by Register route.');
      }
    })
  },
  afterModel() {
    this.transitionTo('dashboard');
  }
});
