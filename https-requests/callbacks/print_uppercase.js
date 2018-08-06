var getHTML = require('../lib/http-functions');

function printHTML (html) {
    console.log(html.toUpperCase());
  }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

  getHTML.getHTML(requestOptions, printHTML);