!function u(i,c,f){function a(t,r){if(!c[t]){if(!i[t]){var e="function"==typeof require&&require;if(!r&&e)return e(t,!0);if(s)return s(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=c[t]={exports:{}};i[t][0].call(o.exports,function(r){return a(i[t][1][r]||r)},o,o.exports,u,i,c,f)}return c[t].exports}for(var s="function"==typeof require&&require,r=0;r<f.length;r++)a(f[r]);return a}({1:[function(r,t,e){"use strict";var n={};(function(){Object.entries(n).forEach(function(r){var t=r[0],e=r[1];document.querySelectorAll("[data-".concat(t,"]")).forEach(function(r){var t=r.getAttribute("data-options");t=t&&t.split(",").reduce(function(r,t){var e=t.split(":"),n=e[0],o=e[1];return r[n]=o,r},{}),new e(r,t)})})})()},{}]},{},[1]);
//# sourceMappingURL=main.js.map
