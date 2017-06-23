import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session:Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      riders: this.store.query('rider',{
        orderBy:'status',
        equalTo:true
      }),
      user:this.store.query('user',{
        orderBy:'email',
        equalTo:this.get('session.data.authenticated.profile.email')
      })
    })
  }
});
