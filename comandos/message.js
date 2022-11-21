const { Client, version } = require('discord.js');
const {token} = require('./config.json')
const channel = client.channels.cache.get('id');
const user = client.users.cache.get('id');
const client = new Client();

user.send('content');
channel.send('content');
message.channel.send("My Message");