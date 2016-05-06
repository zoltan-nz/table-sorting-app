import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['numberOfRecords', 'sortBy', 'sortDir'],

  numberOfRecords: 100,

  // Using for sortBy direction
  id: false,
  author: false,
  title: false,
  year: false,

  // Default sorting
  sortBy: 'id',
  sortDir: 'asc',

  sortProperties: Ember.computed('sortBy', 'sortDir', function() {
    return [`${this.get('sortBy')}:${this.get('sortDir')}`];
  }),

  sortedBooks: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    updateRecords(num) {

      if (num < 1) { num = 1; }
      if (num > 10000) { num = 10000; }

      this.set('numberOfRecords', num);
    },

    // Called when the table header clicked
    sortBy(prop) {

      // Change the boolean, we use this value for returning desc or asc
      this.toggleProperty(prop);
      let direction = this.get(prop) ? 'desc' : 'asc';

      this.set('sortBy', prop);
      this.set('sortDir', direction);
    }
  }

});
