# Some thoughts on continuous integration of an iPhone app

## preamble

We are creating an iPhone version of the "Allotment Lab" application. Currently there is only an<a href="https://play.google.com/store/apps/details?id=foam.allotmentlab&hl=en" target="_blank"> Android version</a>. 

Source code of the app and docker things discussed here can be found on <a href="https://github.com/fo-am/iAllotment-app" target="_blank">GitHub</a>.

In order to remain close to the zeitgeist of doing EVERYTHING with JavaScript I decided to develop using '<a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">react native</a>'.

 You can make a new app with these few statements:

```
npm install -g create-react-native-app

create-react-native-app AllotmentLab

cd AllotmentLab
npm start
```
After installing an <a href="https://expo.io/" target="_blank">app</a> on your phone you can scan a QR code and your application loads. When you update the application code the change is shown on the phone immediately. This is very developer friendly, allowing quick validation from writing code to seeing the effect of the code.
## Problems
The negative aspect of this system is that in order to build a 'real' iPhone application you have been tied to a third party build system. this happens in on the Expo peoples servers it is out of my control and reliant on their (closed source) build system remaining up, free and available.

It is possible to back out of the Expo proprietary systems and back into the normal 'react native' ecosystem, where the final build is done using <a href="https://developer.apple.com/xcode/" target="_blank">Xcode</a>.
## Solutions
My plan to maintain the swift development lifecycle, and make use of the normal 'react native' tools is to have a continuous integration (CI) server pull the expo code from the GitHub repository, run the commands to create the Xcode project, then build that project and possibly have a step to deploy the iPhone app to testers and the App Store.


## Continuous integration with TeamCity in docker.

I have a lot of experience with TeamCity as a CI server. It is very flexible in what it will build, and I am familiar with its quirks. What I have not been responsible for in the past is installing the server. In these modern times it is bad practice to actually install things on actual computers so we will be using Docker to maintain the infrastructure.

Jetbrains (who make TeamCity) provide docker images of the <a href="https://hub.docker.com/r/jetbrains/teamcity-server/" target="_blank">server</a> and <a href="https://hub.docker.com/r/jetbrains/teamcity-minimal-agent/" target="_blank">agents</a>.

We need to create a Dockerfile that will add the required Expo command line tools to the agent, and start the server with agent linked.

All code is available on <a href="https://github.com/fo-am/iAllotment-app" target="_blank">GitHub</a>.

First the Dockerfile to customise the agent.

```dockerfile
FROM 'jetbrains/teamcity-minimal-agent'

RUN apt-get update
RUN apt-get upgrade -y
RUN curl -sL https://deb.nodesource.com/setup_8.x |  bash - 
RUN apt-get install nodejs 
RUN npm install -g yarn 
RUN yarn global add exp
```
Then the Docker compose file "docker-compose.yml" Note hard coded local directory's...

```dockerfile
version: '2'

services:  
  server:
    image: 'jetbrains/teamcity-server' # the official JetBrains image
    volumes:
      - 'D:\Docker\teamcity\data:/data/teamcity_server/datadir'
      - 'D:\Docker\teamcity\logs:/data/teamcity/logs'
    ports:
      - 8111:8111
    environment:
      - TEAMCITY_SERVER_MEM_OPTS="-Xmx750m"
  agent:
    build: .
    environment:
      - SERVER_URL=server:8111
```
The "build" line under "agent" knows to look for a file called `Dockerfile` and this downloads the agent image and makes our additions to it. Then both containers are started and linked together. Though it does not always seem to work so you need to run `docker build .` to force it if it ain't working. (the full stop is important!)

or you could try<a href="http://staxmanade.com/2016/09/how-to-update-a-single-running-docker-compose-container/" target="_blank"> `docker-compose up -d --no-deps --build agent`</a> if you have made a change to the agent dockerfile.

With both files in the same directory run 

`docker-compose up -d`

which will look for a file called `docker-compose.yml` and start the service. you can then navigate to "http://localhost:8111/" and TeamCity will be running.

### When things go wrong!
to stop all running docker things use <a href="http://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images" target="_blank">this magic</a> 
`docker stop $(docker ps -aq)`

to remove them

`docker rm $(docker ps -aq)`

## What to do with TeamCity
I don't currently have scripts to control TeamCity. So an admin user must be created and the agent be authorised to run our builds.
will this help?https://confluence.jetbrains.com/display/TCD10/Super+User
there is an api https://confluence.jetbrains.com/display/TCD10/REST+API

## creating the build steps

## check out from github whenever there is a commit.
but only in the code folder! ignore other things.

## run the exp export commands

## navigate to the ios folder

## do a build (need to be on a mac)
will this blog help? https://content.pivotal.io/blog/ios-continuous-deployment-with-teamcity-and-hockeyapp

make sure the .ipa file is exported as a build artifact.

## create a dependent build that will deploy the .ipa to apple (using pilot maybe?)





