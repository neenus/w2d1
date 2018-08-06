var getHTML = require('../lib/http-functions');

function printHTML (html) {
    var reversedHtml = html.split('').reverse().join('');
    console.log(reversedHtml);
  }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  getHTML.getHTML(requestOptions, printHTML);