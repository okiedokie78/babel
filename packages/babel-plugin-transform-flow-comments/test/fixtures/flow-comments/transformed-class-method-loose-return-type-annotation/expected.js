"use strict";

// @flow
var C = function () {
  function C() {}

  var _proto = C.prototype;

  _proto.m = function m(x
  /*: number*/
  )
  /*: string*/
  {
    return 'a';
  };

  return C;
}();