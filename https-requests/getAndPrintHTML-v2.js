var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTMLv2 (options) {

  
    /* Add your code here */
    https.get(options, function (response) {
        var buffer;
        // set encoding to UTF-8
        response.setEncoding('utf8');

        // callback is invoked when data chunck is received
        response.on('data', function (data) {
            buffer += buffer + data;
            console.log(buffer);
        });
    });
  }
  getAndPrintHTMLv2(requestOptions);