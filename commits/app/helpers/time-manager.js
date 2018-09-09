import EmberObject, { observer } from "@ember/object";

export default EmberObject.extend({
    time: 0,
    timeChanged: observer('time', function() {
        console.log('time changed to ', this.time);
    })    
})