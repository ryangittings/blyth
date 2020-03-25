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