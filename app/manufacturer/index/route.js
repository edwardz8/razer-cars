import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  //Load Data for the current page
  model(brands) {
    return fetch(`${config.apiUrl}/brands/`)
    .then(r => r.json(brands));
  }
});
