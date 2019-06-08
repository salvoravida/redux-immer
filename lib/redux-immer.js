"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineReducers = void 0;

var combineReducers = function combineReducers(produce) {
  var reducers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = Object.keys(reducers);
  var initialState = keys.reduce(function (a, k) {
    a[k] = reducers[k](undefined, {});
    return a;
  }, {});
  return produce(function (draft, action) {
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      draft[key] = reducers[key](draft[key], action);
    }

    return draft;
  }, initialState);
};

exports.combineReducers = combineReducers;