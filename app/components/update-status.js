import Ember from 'ember';

export default Ember.Component.extend({
  status:false,
  actions:{
    statusChange(){
      var params;
      var rider=this.get('rider')
      if (this.get('status')) {
        this.set('status',false),
        params ={
          idNumber:this.get('rider.idNumber'),
          name:this.get('rider.name'),
          email:this.get('rider.email'),
          phoneNo:this.get('rider.phoneNo'),
          photoUrl:this.get('rider.photoUrl'),
          location:this.get('rider.location'),
          status: this.get('status')
        };
        console.log(rider);
        this.sendAction('updateStatus1',rider,params)
      } else{
        this.set('status',true),
        params ={
          idNumber:this.get('rider.idNumber'),
          name:this.get('rider.name'),
          email:this.get('rider.email'),
          phoneNo:this.get('rider.phoneNo'),
          photoUrl:this.get('rider.photoUrl'),
          location:this.get('rider.location'),
          status: this.get('status')
        };
        this.sendAction('updateStatus1',rider,params)
      }
    }
  }
});
//
// idNumber: DS.attr(),
// name: DS.attr(),
// email: DS.attr(),
// phoneNo: DS.attr(),
// plates: DS.attr(),
// photoUrl: DS.attr(),
// location: DS.attr(''),
// status: DS.attr(),
