FROM marclewis/ubuntu_nginx_node

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/

# add the app to /var/www for nginx
ADD ./app /var/www
WORKDIR /var/www
RUN npm install

# Install pm2 globally to run the app
RUN npm i -g pm2


# start nginx & pm2 as a process so docker doesn't exit
ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]
