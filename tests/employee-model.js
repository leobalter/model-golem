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
    return 'email-' + this.sequence + '@bocoup.com';
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

factory.create({
  first: 'Sylvia',
  last: 'Plath'
});

factory.create({
  first: 'Paul',
  last: 'Revere'
});

try {
  assert.deepEqual(factory.created, expected);
  console.log('Passed!');
} catch(e) {
  console.error('Failed', e);
}
