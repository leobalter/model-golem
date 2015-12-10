# yet-another-model-factory-library

*Create easy model based mocks*

---

## Installing

```
npm install --save-dev yet-another-model-factory-library
```

## Using

Load the Factory:

```js
// NodeJS / CommonJS Modules
var Factory = require('yet-another-model-factory-library');

// ES2015 Modules
import Factory from 'yet-another-model-factory-library';
```

Define a model:

```js
var Person = {
  id: function() {

    // this.sequence is autoincremented on every creation step, starts from 0
    return this.sequence;
  },

  // Define the attributes giving their default values
  name: '',
  charisma: 42,

  // Reuse attributes
  username: function() {
    return this.name.toLowerCase().replace(/ /g, '');
  }
};
```

Instantiate the Factory with your model:

```js
var peopleFactory = new Factory(Person);
```

Create your mocks!

```js
var person = peopleFactory({
  name: 'Leo Balter',
});

/*
  person === {
    id: 0,
    name: 'Leo Balter',
    charisma: 42,
    username: 'leobalter'
  }
*/
```

Create your mocks from arrays!

```js
var people = peopleFactory([
  {
    name: 'Green Avocados',

    // replace default values!
    charisma: 0
  },
  {
    name: 'Spicy Mustard',
    id: 100,
    charisma: 37,
    username: 'mryellow'
  }
]);

/*
  people === [
    {
      id: 2,
      name: 'Green Avocados',
      charisma: 0,
      username: 'greenavocados'
    },
    {
      id: 100,
      name: 'Spicy Mustard',
      charisma: 37,
      username: 'mryellow'
    }
  ]
*/
```

Get the stored data!

```js
var stored = peopleFactory.store;

/*
  stored === [
    {
      id: 1,
      name: 'Leo Balter',
      charisma: 42,
      username: 'leobalter'
    },
    {
      id: 2,
      name: 'Green Avocados',
      charisma: 0,
      username: 'greenavocados'
    },
    {
      id: 100,
      name: 'Spicy Mustard',
      charisma: 37,
      username: 'mryellow'
    }
  ]
*/
```

---

## MIT Licensed
