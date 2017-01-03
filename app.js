var dockerode = require('dockerode');
var docker = new dockerode();

docker.listContainers({all: true}, function(err, containers) {
  console.log(JSON.stringify(containers, null, 2));
});

docker.createContainer({
    Image: 'tripdubroot/primordial',
    "AttachStdin": false,
    "AttachStdout": false,
    "AttachStderr": false,
    "ExposedPorts": {
      "6996/tcp": {}
    },
    Tty: false,
    OpenStdin: false,
    StdinOnce: false,
    "WorkingDir": "/app",
    "Entrypoint": [
      "npm",
      "start"
    ],
    "PortBindings": {
      "6996/tcp": [
        {
          "HostIp": "",
          "HostPort": "6996"
        }
      ]
    }
  }, function(err, container) {
    if (err) console.log(err);
    console.log('Starting: ' + container.id);
    container.start(() => {});
});