import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session:Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      riders: this.store.query('rider',{
        orderBy:'status',
        equalTo:'available'
      }),
      user:this.store.query('user',{
        orderBy:'email',
        equalTo:this.get('session.data.authenticated.profile.email')
      })
    })
  }
});
//
//
// model() {
//      return Ember.RSVP.hash({
//        rentals: this.store.findAll('rental'),
//        reviews: this.store.findAll('review')
//      });
//
//
//
//    }  model: function() {
//     return this.store.query('rider', {
//       orderBy: 'status',
//       equalTo: 'available'
//     });
//   }
