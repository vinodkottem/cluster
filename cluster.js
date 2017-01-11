var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
  console.log(" ^^^^^^^^^^^^^^^^^^ : "+numCPUs);
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', function(worker, code, signal) {
      console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
      console.log('Starting a new worker');
      cluster.fork();
  });
} else {
    require("./app.js");
}