var https = require('https');

function getHTML (options, callback) {
    /* Add your code here */
    https.get(options, function (response) {
        var html;
        // set encoding to UTF-8
        response.setEncoding('utf8');

        // callback is invoked when data chunck is received
        response.on('data', function (data) {
            html += data;
            // console.log(html);

        });
        response.on('end', function() {
            callback(html);
        })
    });
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
  getHTML(requestOptions, printHTML);