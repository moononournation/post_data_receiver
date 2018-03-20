const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  var d = "";
  req.on('data', function (data) {
    d += data;
  });
  req.on('end', function () {
    now = new Date();
    console.log("%s: %s", now, JSON.stringify(JSON.parse(d), null, 1));
    res.end();
  });
}).listen(3000);
