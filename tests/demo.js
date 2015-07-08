
var source ='';
module.exports = {
  'scanaccess': function(client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 2000)

      .scanaccess('config', function(result) {
        source = result;
      })
    

  },



  after : function(c) {
    c.end();
    // console.log(source);

var request = require("request");
var body = {
        'source': source
    },
    options = {
        'headers': {
            'Content-Type': 'application/json'
        },
        'url':  'http://localhost/evaluate',
        'method': 'POST',
        'body': body,
        'json': true,
        'rejectUnauthorized': false
    };
request(options, function (error, response, responseBody) {
  if(error) {
      console.log(error);
      retData = error;
  } else {
      console.log(response.statusCode, responseBody);
  }
})

  }
};