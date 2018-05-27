const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`BOT ON!`); 

});

client.login(config.token);

client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
  }
  if(command === "teste") {
    message.channel.send("Olá marilene!")
    }
  if(command === "aviso") {
      if (message.member.hasPermission('MANAGE_GUILD')) {  
             
          let mensg = args.join(" ");
          if(!mensg)
             return message.channel.send("Digite a mensagem do aviso!")
             
          const anuncio = new Discord.RichEmbed()
             .setColor("0cff00")
             .setAuthor("Anúncio", "https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")
             
             .setDescription(mensg)
             
             .setTimestamp()
             .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
          
          message.channel.send("@everyone", anuncio)
          
  }
}
if(command === "changelog") {
  if (message.member.hasPermission('MANAGE_GUILD')) {  
         
      let mensg = args.join(" ");
      if(!mensg)
         return message.channel.send("Digite a mensagem de Change-log")
         
      const changelog = new Discord.RichEmbed()
         .setColor("0cff00")
         .setAuthor("ChangeLog", "https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")
         
         .setDescription(mensg)
         
         .setTimestamp()
         .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
      
      message.channel.send("", changelog)
      
  }
}
});
  
