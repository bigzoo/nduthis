import Ember from 'ember';

export default Ember.Route.extend({
  session:Ember.inject.service(),
  model(params){
    return Ember.RSVP.hash({
      rider: this.store.findRecord('rider',params.rider_id),
      user:this.store.query('user',{
        orderBy:'email',
        equalTo:this.get('session.data.authenticated.profile.email')
      })
    })
  }
});
