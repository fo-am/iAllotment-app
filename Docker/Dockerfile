FROM 'jetbrains/teamcity-minimal-agent'

RUN apt-get update
RUN apt-get upgrade -y
RUN curl -sL https://deb.nodesource.com/setup_8.x |  bash - 
RUN apt-get install nodejs 
RUN npm install -g yarn 
RUN yarn global add exp