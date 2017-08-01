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


https://blog.agchapman.com/setting-up-a-teamcity-build-environment-using-docker/


If you are feeling fancy and want more agents you can simply do `docker-compose scale agent=3` and three agents will be available.

note: the agents can take a minute or two to appear as they have to start up and register with the server.

### When things go wrong!
to stop all running docker things use <a href="http://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images" target="_blank">this magic</a> 
`docker stop $(docker ps -aq)`

to remove them

`docker rm $(docker ps -aq)`

## back in the real world!
the docker based agents cannot be used to build ios things, the agent has to actualy run on the mac hardware.
to do this go to administration -> install agent and download the zip file.
unzip this somewhere and run `./mac.launchd.sh launch` to start the agent. this should appear in the agents list after a minute or two startup time.
as we are now on a mac you will also need to update the `docker-compose.yml` file with paths that are mac friendly.

In order to make a mac build work we need to install the correct software.

node to allow us to use npm
react etc to have the files to build
Xcode to allow the build to happen
CocoaPods to manage mac dependencys. dunno why this does not install with Xcode...
do `sudo gem install cocoapods` if this does not work then you need to install Ruby as well...
Then run `pod setup` in a console window and wait for 10 minutes or so

All this allows us to run `pod install` before building the iphone app. A necessary step that gets dependencies for the final iphone build.


## What to do with TeamCity
I don't currently have scripts to control TeamCity. So an admin user must be created and the agent be authorised to run our builds.
will this help?https://confluence.jetbrains.com/display/TCD10/Super+User
there is an api https://confluence.jetbrains.com/display/TCD10/REST+API

## creating the build steps

## check out from github whenever there is a commit.
There is a wizard for this which gets what you need.

In build project "Edit checkout rules(0)" add the lines

```
-:.
+:compost-app
```
This means only the compost-app folder will be checked out. reducing bandwith usage.

Triggers add `+:compost-app/**` trigger. (you need hit edit->advanced options ). This means only changes in the compost app folder will trigger a build.

parameters: add `Expo Password` and `Expo Username` configuration parameters


## run the exp export commands

create a command line build step.

current commands are this which is working up to the detach but won't do it on a pc... needs a mac. sudden doupt about if this will work at all!

```dos
cd compost-app
npm install
exp login -u %Expo Username% -p "%Expo Password%"
exp detach
cd ios
ls
```


## navigate to the ios folder 
open in Xcode.
set signing to manual



use fastlane to build and deploy the ipa file to Apple





