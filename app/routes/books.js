import Ember from 'ember';
import books from '../fixtures/books';

export default Ember.Route.extend({

  queryParams: {
    numberOfRecords: {
      refreshModel: true
    }
  },

  model(params) {
    return books(params.numberOfRecords);
  }

});
