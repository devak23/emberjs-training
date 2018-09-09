import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import timeManager from './helpers/time-manager';
import Person from './helpers/person';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

let myTimeManager = timeManager.create({
  time: 12
});
myTimeManager.set('time', 22);
myTimeManager.set('time', 46);

let p1 = Person.create({
  firstName: 'Abhay',
  lastName: 'Kulkarni'
});

console.log("FullName: ", p1.fullName);
console.log("CompleteFullName: ", p1.completeFullName());

export default App;
