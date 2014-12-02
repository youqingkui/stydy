/**
 * Created by youqingkui on 14/11/14.
 */
var retry = require('retry')
  , http = require('http');

function get(url, cb) {
  var options = {
    hostname: url,
    port: 80,
    method: 'GET'
  };

  var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
//            console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
    cb(e.message);
  });

  req.end();

}

function retryGet(url, cb) {
  var operation = retry.operation();
  operation.attempt(function (currentAttempt) {
    console.log("Connect Times:" + currentAttempt + ":" + url);
    get(url, function (err) {
      if (operation.retry(err)) {
        return;
      }
      cb(err ? operation.mainError() : null);
    });
  });
}
var baidu = "www.baidu.com1";
retryGet(baidu);

var facebook = "www.facebook.com";
retryGet(facebook);
