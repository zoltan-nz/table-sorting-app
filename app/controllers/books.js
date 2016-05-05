import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['numberOfRecords', 'id', 'author', 'title', 'year'],

  numberOfRecords: 100,

  // Using for sortBy direction
  id: false,
  author: false,
  title: false,
  year: false,

  sortProperties: ['id:asc'],
  sortedBooks: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    updateRecords(number) {

      if (number < 1) { number = 1; }
      if (number > 10000) { number = 10000; }

      this.set('numberOfRecords', number);
    },

    sortBy(property) {
      this.toggleProperty(property);

      let direction = this.get(property) ? 'desc' : 'asc';

      this.set('sortProperties', [`${property}:${direction}`]);
    }
  }

});
