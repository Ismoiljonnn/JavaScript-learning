// 'this' in regular functions
// Depends on strict mode.

function regularFunc() {
  console.log(this); // 'global' (or 'window') in non-strict mode
}

function strictFunc() {
  'use strict';
  console.log(this); // 'undefined' in strict mode
}

regularFunc();
strictFunc();
