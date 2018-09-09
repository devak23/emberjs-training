
import EmberObject from '@ember/object';
import validNumberMixin from '../mixins/valid_number';
import focussableMixin from '../mixins/focussable';

export default EmberObject.extend(validNumberMixin, focussableMixin, {
    text: ""
});