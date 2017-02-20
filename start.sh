#!/bin/sh

nginx
nginx reload
pm2 start processes.json --no-daemon
