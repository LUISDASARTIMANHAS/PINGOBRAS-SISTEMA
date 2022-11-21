const { Client, version } = require('discord.js');
const {token} = require('./config.json')
const bot = new Client();
const date = new Date().getFullYear()



bot.on("ready", async() => {
const usersCount = bot.users.size
const channelsCount = bot.channels
const guildsCount = bot.guilds;
const botTag = bot.user.tag
  
  console.log(`[ Client ] ${botTag} esta online agora! `);
    bot.user.setPresence({
        status: 'idle',activity: {
            name: "Trabalhando Para Você Crescer! ©️2010-" + date ,
            type: "PLAYING",}
    })// bot presença
  
  console.log('Bot: Hosting ' + usersCount + ' users, in ' + `${channelsCount}` + ' channels of ' + `${guildsCount.size}` + ' guilds.');
  const channel = await bot.channels.fetch("1032778034811506738");
  channel.send("MENSAGEM DO SERVIDOR PINGOBRAS:"+ botTag + " Esta online agora!");

  
    });//Fim do ready

bot.login(token)
