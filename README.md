# docker-remote-api
Example code used at http://tripdubroot.com

Follow Docker Remote API docs to understand passing options: [Remote API - Create Container](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/create-a-container)

## Manual testing
This is used to understand the options need to pass create, run, etc.

```
docker pull tripdubroot/primordial
docker run -d --name primordial -p 6996:6996 tripdubroot/primordial
docker inspect primordial
```

Use the inspect output to create options for creating and running containers:

```JavaScript
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
```

Can also pull from [Meteor-Docker](https://github.com/djedi23/meteor-docker/blob/3c323daba574f0354e12efe6b237e83fdddd76b3/server/methods.js#L705).
