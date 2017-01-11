var express = require('express');
var cfenv = require('cfenv');
var cluster = require('cluster');
var http = require('http');
var app = express();
var numWorkers ;
if(cluster.isMaster) {
    numWorkers = require('os').cpus().length;
    console.log(numWorkers);
    }

app.use(express.static(__dirname + '/public'));
app.get('/nocpus', function(req, res){
	  res.send({'hello world':numWorkers});
	});
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});

