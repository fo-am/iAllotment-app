Install docker on your machine

Create a folder with data and logs files

create a docker-compose.yml file

add to the file in the way suggested in this post
https://blog.agchapman.com/setting-up-a-teamcity-build-environment-using-docker/

Add exp to the agent

In powershell

docker exec -it my-customized-agent bash

apt-get update

apt-get upgrade -y

 curl -sL https://deb.nodesource.com/setup_8.x |  bash -
 
 apt-get install nodejs
 
 npm install -g yarn
 
 yarn global add exp
 
 < cntrl- z> to get back to powershell