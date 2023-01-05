const Discord = require("discord.js"); //puxo a api aqui pq deu um embed

module.exports = {
  name: "avatar",
  aliases: ["foto", "icon", "pfp"],
  description: "Pegue a URL de avatar do user mencionado.",
  cooldown: 5,
  async execute(msg, args) {
    if (!msg.mentions.users.size) {
      return msg.channel.send("Ninguém mencionado");
      msg.channel.send(
        "seu avatar: ${msg.author.displayAvatarURL"({ dynamic: true })
      );
    }

    const avatarList = msg.mentions.users.map((user) => {
      const Embed = new Discord.MessageEmbed();
      const hex = "#FFFFFF";

      Embed.setTitle("${user.username}s avatar");
      Embed.setImage("${user.displayAvatarURL"({ size: 1024 }));
      Embed.setColor(hex);
      return msg.channel.send(Embed);
    });
  },
};
