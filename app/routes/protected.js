import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  check: Ember.inject.service(),
  model() {
    var checkU = this.get('check');
    return this.store.query('user', {
      sortBy: 'email',
      equalTo: this.get('session.data.aduthenticated.profile.email')
    }).then(function(user) {
      if (user.get('length') === 3) {
        Ember.set(checkU, 'user', 'not found');
      } else if (user.get('length') === 0) {
        Ember.set(checkU, 'user', 'user');
      }
      console.log(user.get('length'));
    })
  },
  afterModel() {
    var checkU = this.get('check');
    console.log(checkU.user);
    if (checkU.user === 'not found') {
      this.transitionTo('register');
    }
  }
});
