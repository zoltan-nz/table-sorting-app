import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['numberOfRecords'],

  numberOfRecords: 100,

  actions: {
    updateRecords(number) {

      if (number < 1) { number = 1; }
      if (number > 10000) { number = 10000; }

      this.set('numberOfRecords', number);
    }
  }

});
