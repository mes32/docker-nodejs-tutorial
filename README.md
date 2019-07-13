# Dockerized Node.js Web App Tutorial

```bash
# Build docker image for this project
docker build -t <your username>/docker-nodejs-tutorial .

# List all docker images
docker images

# Run the docker images
docker run -p 49160:8080 -d <your username>/docker-nodejs-tutorial
# The -d runs the contain in 'detached mode' so that the container process is in
# the background. The -p redirects the internal container port 8080 to the 
# external 'localhost' port of 49160

# List all running Docker containers to get the container ID
docker ps

# Print the logs from the container's CLI
docker logs <container id>

# Enter the container
docker exec -it <container id> /bin/bash

# Make an HTTP request to the running app
curl -i localhost:49160
```

## References
[nodejs.org/de/docs/guides/nodejs-docker-webapp](https://nodejs.org/de/docs/guides/nodejs-docker-webapp)