import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import numericBox from './helpers/numeric_box';
import father from './helpers/father';
import child from './helpers/child';''


const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

let textbox = numericBox.create();
window.console.log("number: ", textbox.isValid("12"));
textbox.onFocus();

window.console.log("arithmetic: ", textbox.isValid("12 * 4"));
textbox.onFocus();

window.console.log("string: ", textbox.isValid("abc"));
textbox.onFocus();

/////////////////////////////////////////////////////////////////

let abhay = father.create({
  name:'abhay',
  age:40,
  address:'Whitefield'
});

var soham = child.create({
  school:'Whitefield High School',
  father: abhay
});

window.console.log("child's addr: " ,  soham.get('address'));
window.console.log("Changing father's address to Mysore");
abhay.set('address','Mysore');
window.console.log("child's addr: " , soham.get('address'));


export default App;
