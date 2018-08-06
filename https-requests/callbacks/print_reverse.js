var getHTML = require('../lib/http-functions');

function printHTML (html) {
    var reversedHtml = html.split('').reverse().join('');
    console.log(reversedHtml);
  }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

  getHTML.getHTML(requestOptions, printHTML);