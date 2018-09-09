import EmberObject, { computed, observer } from "@ember/object";

export default EmberObject.extend({
    firstName: null,
    lastName: null,
    fullName: computed('firstName', 'lastName', function() { 
        return `${this.firstName} ${this.lastName}`
    }),
    completeFullName: observer('firstName', 'lastName', function() {
        return `${this.firstName} ${this.lastName}`
    })
});

