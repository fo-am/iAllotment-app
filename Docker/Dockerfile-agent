FROM 'jetbrains/teamcity-minimal-agent'

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install git-all -y
RUN curl -sL https://deb.nodesource.com/setup_8.x |  bash - 
RUN apt-get install nodejs -y
RUN npm install -g create-react-native-app 
RUN npm install -g yarn 
RUN yarn global add exp
RUN npm install -g npm@4.6.1
