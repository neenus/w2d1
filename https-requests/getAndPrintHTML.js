var https = require('https');

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    /* Add your code here */
    https.get(requestOptions, function (response) {
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
  getAndPrintHTML();