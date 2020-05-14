(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var components = {};
var app = {
  init: function init() {
    Object.entries(components).forEach(function (component) {
      var key = component[0];
      var value = component[1];
      var nodes = document.querySelectorAll("[data-".concat(key, "]"));
      nodes.forEach(function (node) {
        var options = node.getAttribute('data-options');

        if (options) {
          options = options.split(',').reduce(function (acc, cur) {
            var data = cur.split(':');
            var option1 = data[0];
            var option2 = data[1];
            acc[option1] = option2;
            return acc;
          }, {});
        }

        new value(node, options);
      });
    });
  }
};
app.init();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
