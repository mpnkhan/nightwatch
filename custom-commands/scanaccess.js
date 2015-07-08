'use strict';
var request = require("request");

module.exports.command = function(config, callback) {
  var self = this , retData;

  this.execute(function(retData) {
    return document.body.innerHTML;
  }, 
  [retData], 
  function(result) {
    callback.call(self, result.value);
  });

  return this;
};
