FROM marclewis/ubuntu_nginx_node

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/
RUN nginx reload

# install dependencies
ADD ./app/package.json
RUN cd app \
    npm install

# add the app to /var/www for nginx
ADD ./app /var/www
WORKDIR /var/www

# Install pm2 globally to run the app
RUN npm i -g pm2


# start pm2 as a process so docker doesn't exit
CMD ["pm2", "start", "processes.json", "--no-daemon"]
