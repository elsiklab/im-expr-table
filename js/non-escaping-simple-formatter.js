(function() {
  var callable, compose, escape, getData, _ref,
    __slice = [].slice;

  _ref = require('underscore'), compose = _ref.compose, escape = _ref.escape;

  getData = require('im-tables/build/utils/ensure-required-data');

  callable = function(f) {
    return function() {
      var args, _;
      _ = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return f.apply(null, args);
    };
  };

  module.exports = function(type, fields, f, classes) {
    return {
      classes: classes,
      target: type,
      replaces: fields,
      call: callable(compose(f, getData(type, fields)))
    };
  };

}).call(this);
