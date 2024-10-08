FROM node:20.9.0
LABEL ENG R&D Team
WORKDIR /app
# Install Ubuntu dependencies
#RUN sed -i '/updates/d'  /etc/apt/sources.list
RUN apt-get update && apt-get install curl git build-essential cron nano -y
RUN echo "Europe/Rome" | tee /etc/timezone
RUN dpkg-reconfigure --frontend noninteractive tzdata
COPY . ./
# install app dependencies
RUN npm install 
# Build for production.
RUN npm run build --production
# Install `serve` to run the application.
RUN npm install -g serve
# Run application
#RUN npm audit fix --force
#CMD [ "npm", "start" ]
#CMD serve -s build --listen 3000 --ssl-cert "./cert/cert.pem" --ssl-key "./cert/key.pem"
CMD serve -s build --listen 3000