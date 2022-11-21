const { Client, version } = require('discord.js');
const {token} = require('./config.json')
const bot = new Client();
const date = new Date().getFullYear()

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} esta online agora! `);
    
    bot.user.setPresence({
        status: 'idle',
        activity: {
            name: "Trabalhando Para Você Crescer! ©️2010-" + date ,
            type: "PLAYING",
        }
    })
  console.log('Bot: Hosting ' + `${bot.users.size}` + ' users, in ' + `${bot.channels.size}` + ' channels of ' + `${bot.guilds.size}` + ' guilds.');
  const channel = await bot.channels.fetch("1032778034811506738");
  channel.send("MENSAGEM DO SERVIDOR PINGOBRAS: Novo Usuario Conectado A Pingobras:" + navigator.plataform);

    });//Fim do ready


bot.login(token)
