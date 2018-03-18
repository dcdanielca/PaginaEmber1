import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', function() {});
  this.route('home');
  this.route('calculator');
  this.route('register');
  this.route('list-users');
});

export default Router;
