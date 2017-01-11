var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/nocpus', function(req, res){
	  res.send({'hello world':'Okay'});
	});
app.get('/crashme', function(req, res){
	  process.exit(1);
	  res.send({'hello world':'Okay'});
	});
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});

