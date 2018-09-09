import Mixin from '@ember/object/mixin'

export default Mixin.create({
    isValid: function(number) {
        window.console.log("in valid mixin");
        if (isNaN(number)) {
            window.console.log("NaN");
            return false;
        } else {
            window.console.log("valid num");
            return true;
        }
    }
});