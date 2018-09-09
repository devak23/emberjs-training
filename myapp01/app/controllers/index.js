import Controller from '@ember/controller';


export default Controller.extend({
    toggle: false,
    actions:{ 
        changeColor: function(){
            this.toggleProperty('toggle');
            this.toggle ? this.set('color','cyan') : this.set('color', '');
        },
        // updateName: function() {
        //     this.set('fullName', this.get('model.customer.firstName') + ' ' + this.get('model.customer.lastName'));
        // }
    }
  });