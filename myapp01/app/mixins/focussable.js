import Mixin from '@ember/object/mixin'

export default Mixin.create({
    onFocus: function() {
        window.console.log("on Focus");
    }
});

