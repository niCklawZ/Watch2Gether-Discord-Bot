const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

//link = "nothing yet."

bot.on('message', msg => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith(config.prefix)) return;
    
    let command = msg.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    console.log(command);
    
    let args = msg.content.split(" ").slice(1);
  
  
  if (command === "help"){
        var embedhelp = new Discord.RichEmbed()
            .setTitle("Watch2Gether-Bot Commands")
            .addField("!setlink [link]", "Speichert neuen Link.", true)
            .addField("!link", "Gibt gespeicherten Link aus.", true)
            .setColor([250, 206, 58])
            .setThumbnail(bot.user.avatarURL)
            msg.channel.sendEmbed(embedhelp); 
    }
    
    if (command === "link") {
        
        var embedlink = new Discord.RichEmbed()
            .setTitle("Watch2Gether Link:") 
            .setDescription(config.link)
            .setColor([250, 206, 58])
            //.setThumbnail(bot.user.avatarURL)
        msg.channel.sendEmbed(embedlink);       
    }
    
    if (command === "setlink") {
        config.link = args;
        var embedsetlink = new Discord.RichEmbed()
            .setTitle("Der Watch2Gether Link wurde geändert!")
            .setColor([250, 206, 58])
            //.setThumbnail(bot.user.avatarURL)
        msg.channel.sendEmbed(embedsetlink);
    }
    
});

bot.login(process.env.BOT_TOKEN);
