import Ember from 'ember';

const apiUrl = 'https://razerapi.herokuapp.com/ryan/basic/brands';

export default Ember.Route.extend({
  //Load Data for the current page
  model(brands) {
    return fetch(apiUrl)
    .then(r => r.json(brands));
  }
});
