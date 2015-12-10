var assert = require('assert');
var expected = require('./employee-model-results');
var Factory = require('../index');
var _ = require('lodash');

var EmployeeModel = {
  id: function() {
    return this.sequence;
  },
  first: '',
  last: '',
  email: function() {
    return this.item.first.toLowerCase() +
      this.item.last.toLowerCase() +
      '@business.com';
  },
  email_personal: function() {
    return 'email-' + this.sequence + '@example.com';
  },
  supporter_id: 1,
  date_start: '2014-01-01',
  date_end: '2014-02-01',
  github_user: function() {
    return 'github-' + this.sequence;
  },
  position_id: 1,
  is_billable: true,
  phone: 'phone',
  irc: 'irc',
  twitter: 'twitter',
  website: 'website',
  slug: 'slug',
  notes: 'notes',
  meta: {}
};

var factory = new Factory(EmployeeModel);

try {
  assert.deepEqual(
    factory.create({
      first: 'Sylvia',
      last: 'Plath'
    }),
    expected[0],
    'Single creation #1'
  );

  assert.deepEqual(
    factory.create({
      first: 'Paul',
      last: 'Revere'
    }),
    expected[1],
    'Single creation #2'
  );

  assert.deepEqual(
    factory.created,
    expected,
    'factory.created stores the results'
  );

  // Reinstatiate factory
  factory = new Factory(EmployeeModel);

  assert.deepEqual(
    factory.create([
      {
        first: 'Sylvia',
        last: 'Plath'
      },
      {
        first: 'Paul',
        last: 'Revere'
      }
    ]),
    expected,
    'create many from an array'
  );

  assert.deepEqual(
    factory.created,
    expected,
    'factory.created stores the results'
  );

  console.log('Passed!');
} catch(e) {
  console.error('Failed', e);
}
