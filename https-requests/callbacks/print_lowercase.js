var getHTML = require('../lib/http-functions');

function printHTML (html) {
    console.log(html.toLowerCase());
  }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };

  getHTML.getHTML(requestOptions, printHTML);