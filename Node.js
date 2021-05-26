const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello hell")
})

app.listen(3000, () =>{
  console.log("project ready")
})

let Discord = require("discord.js");
let client = new Discord.Client();
client.on("message", message => {
if (message.content === "ping") {
message.channel.send("pong!")
}


const https = require('https');
 const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';

 if (message.content.startsWith('d!meme')) {
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });

 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;

 var link = 'https://reddit.com' + index.permalink;

 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }

 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;

 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('RANDOM')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }


if(message.content.toLowerCase() === "nameme") {
let nicknames = [
"You ani't got any name son",
"pink guy",
"person",
"stupid man",
"Donkey" ,
"Prince of Hell" ,
"Angel",
"Dunkey",
"Go to sleep"
]; 

let yourNickname = nicknames[Math.floor(Math.random()*nicknames.length)];
message.channel.send(`${yourNickname} is your new nickname!`)
};

if(message.content.startsWith("-thank")) {
let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to thank.")
 else{
 message.channel.send(`${victim} Was thanked by ${message.author}!`)

 }
 }

client.on("guildMemberAdd", member => {
const myServer = "843909439153242122"; 
const welcomeChannel = "844155259760279552";
 if(member.guild.id === myServer) {
 client.channels.cache.get(welcomeChannel).send(`Welcome ${member}!`)
 }
})
 

if (message.content === "Howdy") {
message.channel.send("how are you ")
}

if (message.content === "fine") {
message.channel.send("what are you doing just curious")
}



if(message.content === "creeper") {
 let embed = new Discord.MessageEmbed()
 .setTitle("  PewDiePie Meme")
 .setDescription("awww man")
 .setColor("RANDOM")
 .setFooter("Blood (⓿_⓿)#8465")
 message.channel.send(embed)
  

}
})

client.login("YOUR BOT TOKEN")
