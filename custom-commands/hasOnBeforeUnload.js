module.exports.command = function(callback) {
  var self = this;

  this.execute(function() {
    return window && typeof window.onbeforeunload === 'function';
  }, [], function(result) {
    callback.call(self, result.value);
  });

  return this;
};