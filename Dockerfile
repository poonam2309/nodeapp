FROM node:18
# Create app directory
WORKDIR /usr/src/app
# Copy Nodejs source code into Docker image
COPY app.js ./
# Install node js dependencies
#RUN npm install
# Expose nodejs application port outside of the container 
EXPOSE 8080
# Nodejs appliaction start command
CMD [ "node", "app.js" ]
