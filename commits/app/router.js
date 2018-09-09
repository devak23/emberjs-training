import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('commits', function() {
    this.route('commit', {path: ':sha'});
  });

  this.route('books', function(){
    this.route('book',{path: "/:id"});
    this.route('new');
  });  
});

export default Router;
