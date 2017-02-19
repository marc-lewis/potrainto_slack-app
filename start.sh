#!/bin/sh

nginx
pm2  start processes.json --no-daemon
