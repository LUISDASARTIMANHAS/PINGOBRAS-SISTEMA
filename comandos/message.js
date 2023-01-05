const { Client, version } = require("discord.js");
const { token } = require("./config.json");
const user = client.users.cache.get("id");
const client = new Client();
const channel = client.channels.fetch("");

user.send("content");
channel.send("content");
client.channel.send("My Message");
