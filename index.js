var _ = require('lodash');

function Factory(model) {
  this.id = -1;
  this.model = model;
  this.created = [];
  this.sequence = 0;
}

Factory.prototype = {
  create: function(item) {
    if (_.isArray(item)) {
      return item.map(function(i) {
        return this.create(i);
      }, this);
    }

    this.item = item;

    var merged = _.assign({}, item, this.model, this.mergeResolver.bind(this));

    this.created.push(merged);

    this.sequence++;

    return merged;
  },
  mergeResolver: function(value, def) {
    if (value) {
      return value;
    } else if (_.isFunction(def)) {
      return def.call(this);
    } else {
      return def;
    }
  }
};

module.exports = Factory;
