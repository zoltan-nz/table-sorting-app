import Ember from "ember";
import Faker from "faker";
import _ from "lodash/lodash";

/**
 * Generate `records` number of random books.
 *
 * @param {Integer} records
 * @returns {Array}
 * @public
 */
export default function generatedBooks(records) {

  if (records < 1) { records = 1; }
  if (records > 10000) { records = 10000; }

  return _.times(records, (i) => _fakeBook(i));
}

/**
 * Generate one book with random data thanks for Faker.
 *
 * @param {Integer} id
 * @returns {Ember.Object}
 * @private
 */
function _fakeBook(id) {
  return Ember.Object.create({
    id: id,
    author: Faker.name.findName(),
    title: `${Faker.commerce.productName()} Cookbook`,
    year: Faker.random.number({min: 1940, max: 2016})
  });
}




