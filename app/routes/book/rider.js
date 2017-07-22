import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      rider: this.store.findRecord('rider', params.rider_id),
      user: this.store.query('user', {
        orderBy: 'email',
        equalTo: this.get('session.data.authenticated.profile.email')
      })
    })
  },
  actions: {
    newRide(params) {
      var newRide = this.store.createRecord('ride', params);
      var rider = params.rider;
      var user = params.user
      rider.get('rides').addObject(newRide);
      user.get('rides').addObject(newRide);
      newRide.save().then(function() {
        return rider.save().then(function() {
          user.save();
        })
      });
      this.transitionTo('protected');
    }
  }
});
