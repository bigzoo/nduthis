import Ember from 'ember';

export default Ember.Component.extend({
  addNewRider: false,
  actions:{
    addNewRider(){
      this.set('addNewRider',true)
    },
    resetForm(){
      this.set('idNumber',''),
      this.set('name',''),
      this.set('phoneNo',''),
      this.set('plates',''),
      this.set('photoUrl','')
    },
    cancelForm(){
      this.set('idNumber',''),
      this.set('name',''),
      this.set('phoneNo',''),
      this.set('plates',''),
      this.set('photoUrl',''),
      this.set('addNewRider',false)
    },
    newRider(){
      var params = [
        idNumber: this.get('idNumber'),
        name: this.get('name'),
        email: this.get('session.data.authenticated.profile.email'),
        phoneNo: this.get('phoneNo'),
        plates: this.get('plates'),
        photoUrl: this.get('photoUrl'),
        location: "",
        status: "busy"
      ];
      console.log(params);
    }
  }
});
