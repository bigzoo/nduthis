import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      user: this.store.query('user', {
        orderBy: 'email',
        equalTo: this.get('session.data.authenticated.profile.email')
      })
    })
  }
});
