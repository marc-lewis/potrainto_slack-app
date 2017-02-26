# potrainto

http://potrainto.win

Potrainto is a fun Internet of Shit application that started out as a potato joke. It's a hacked Brio train which uses an Arduino Mega to connect to the wifi, play sounds, and manage the motors. A node server integrates into your slack team to receive commands, play jokes on employees, and manage the potrainto. It uses a mongoDB and queue system to manage orders. It's easily configurable if you have a poke around. It should be well commented and tested if you want to extend it.

# TOC

# Getting Started

Clone the repo and have a laugh at the code and associated tests. Run `docker-compose up` and head to `localhost` when you start getting really into it and you're thinking about actually trying to get something to work or you want to steal the slack integration stuff for your own botz.

## Building Potrainto

You need:

 - Arduino Mega
 - ESP-01 8266
 - A brio train
 - laser cut parts (see the repo for designs)
 - A server (comes with a wercker file for CD, ECS file for server integration)
 - See the repo for wiring schemes, etc

Good luck!

## Controlling Potrainto

 - Hit the front end of the potrainto server and integrate it into your slack. Once you've integrated, you should be able to handle administration through the helpful set up guide. Type `/potrainto help` for all your needs.

# Ideas

- Play songs at a certain time every day
    - Monday, 10am, Dawnson's Creek Theme Song (Season 1)
    - Friday, 5pm, Jurassic Park Main Theme
- 'DJ Potrainto' Can play playlists or songs when ordered
- Chug around the track and identify stations, or we could branch the track and it could do path finding somehow
- Send emails from 'conductor@potrainto.com'
- Send slack notifications
- Calls/texts _someone_ at weekends to let him know about special potato offers
- Has a 'freeroam mode' where it can go to stations and play targeted advertising messsages to station owners
- Deliver small items between stations and notify users of their arrival (can use a pressure sensor to detect whether it has been inserted/stolen before/during delivery) - can play the metal gear solid '!' when it gets to a station, or the Zelda 'chest opening', or some other sting.
- Broadcast motivational messages from noteworthy celebrities (DJ Khaled, Leonard Nemoy, George Takei, https://www.youtube.com/watch?v=KxGRhd_iWuE, https://www.youtube.com/watch?v=bavZbQHbuOk) to make sure we are 'geared up' for work
- Play the coca-cola advert every day in the run up to christmas and deliver chocolates
- Go 'Ho Ho Ho', every few hours in the lead up to christmas
- At 9:30 potrainto starts deliveries and announces them
- At 5:30 potrainto stops deliveries and announces that it's home time
- After 5:30 potrainto will go through each person in the queue and ask them if they want it to be delivered (queue skip), can timeout after two minutes and go to the next person in the queue

# Todo

- Set up polymer & tests
- Set up Express & tests
- BUILD the potrainto
- Template Caching & nginx for static files
- Server set up & CD with Wercker
- SSL
- Set up Ansible with Rundeck for server orchestration
