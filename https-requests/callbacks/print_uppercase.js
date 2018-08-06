var getHTML = require('../lib/http-functions');

function printHTML (html) {
    console.log(html.toUpperCase());
  }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  getHTML.getHTML(requestOptions, printHTML);