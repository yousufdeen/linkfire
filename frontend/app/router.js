import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('music', { path: '/' }, function() {
    
    this.route('albums', { path: '/albums' }, function() {
      this.route('detail', { path: '/:id' },);
    });

    this.route('songs', { path: '/songs' }, function() {
      this.route('detail', { path: '/:id' },);
    });

    this.route('genre', { path: '/genre' }, function() {
      this.route('detail', { path: '/:id' },);
    });

    this.route('artist', { path: '/artist' }, function() {
      this.route('detail', { path: '/:id' },);
    });
  });
});
