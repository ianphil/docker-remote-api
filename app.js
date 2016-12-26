var dockerode = require('dockerode');
var docker = new dockerode();

docker.listContainers({all: true}, function(err, containers) {
  console.log(JSON.stringify(containers, null, 2));
});