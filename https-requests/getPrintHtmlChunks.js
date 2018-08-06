var https = require('https');

function getAndPrintHTMLChunks() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    /* Add your code here */
    https.get(requestOptions, function (response) {
        // set encoding to UTF-8
        response.setEncoding('utf8');

        // callback is invoked when data chunck is received
        response.on('data', function (data) {
            console.log('Chunk Received:', data + '\n');
        });
    });
}
// getAndPrintHTMLChunks();