const { Client, version } = require('discord.js');
const {token} = require('./config.json')
const bot = new Client();
const date = new Date().getFullYear()
const usersCount = bot.users.size
const channelsCount = bot.channels
const guildsCount = bot.guilds


bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} esta online agora! `);
    
    bot.user.setPresence({
        status: 'idle',activity: {
            name: "Trabalhando Para Você Crescer! ©️2010-" + date ,
            type: "PLAYING",}
    })// bot presença
  console.log('Bot: Hosting ' + usersCount + ' users, in ' + `${channelsCount}` + ' channels of ' + `${guildsCount.size}` + ' guilds.');
  const channel = await bot.channels.fetch("1032778034811506738");
  channel.send("MENSAGEM DO SERVIDOR PINGOBRAS:");

    });//Fim do ready

bot.login(token)
