// Generated by CoffeeScript 1.8.0
(function() {
  var XiaomiPlatform, qs, request;

  request = require('request');

  qs = require('qs');

  XiaomiPlatform = (function() {
    XiaomiPlatform.prototype.send_uri = 'https://api.xmpush.xiaomi.com/v2/message/regid';

    XiaomiPlatform.prototype.method = 'POST';

    function XiaomiPlatform() {
      this.apiKey = '';
      this.apiSecret = '';
    }

    XiaomiPlatform.prototype.configure = function(options) {
      var key, val;
      if (options == null) {
        options = {};
      }
      for (key in options) {
        val = options[key];
        this[key] = val;
      }
      return this;
    };

    XiaomiPlatform.prototype.send = function(data, callback) {
      var extra, self, uri;
      if (data == null) {
        data = {};
      }
      if (callback == null) {
        callback = function() {};
      }
      self = this;
      extra = data.extra;
      delete data.extra;
      uri = self.send_uri + '?' + qs.stringify(data);
      return request({
        uri: uri,
        method: self.method,
        json: true,
        form: extra,
        headers: {
          Authorization: "key=" + self.apiSecret
        }
      }, function(err, res, body) {
        return callback(err, body);
      });
    };

    return XiaomiPlatform;

  })();

  module.exports = new XiaomiPlatform;

}).call(this);