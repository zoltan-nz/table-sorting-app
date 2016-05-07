# Table-sorting-app

This is an Ember application, without Ember Data.

Experimenting with sorting data in a table.

## Implementation log

Create new Ember app.

Remove Ember Data.

Add sass and bootstrap.

Add ember-faker addon.

Add ember-lodash addon.

Create a books route.

Create a books controller.

Create a navbar partial with link to the Books page.

Create a folder `fixtures` and a file `books.js` for generating fake array with book Ember Object.

Add model hook to books route where we return our generated fixture data.

List all books on our template.

Add dynamic `Number of Records` field to the page.

Add sorting logic to the page.

Use queryParams to store the sorting state.
