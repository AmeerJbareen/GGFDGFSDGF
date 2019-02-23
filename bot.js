const Discord = require("discord.js");
const Hattan = new Discord.Client();

Hattan.on('ready', () => {
   console.log(`Logged in as ${Hattan.user.tag}!`);
Hattan.user.setGame(`>Améer< `,'https://www.twitch.tv/6xlez1');
});


Hattan.on('message', message => {
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم ارساله في الخاص")
   .setFooter(".Améer",'https://cdn.discordapp.com/attachments/548602011386642473/548926416381673473/65.jpg')
      message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("هذا الرابط لمستخدم واحد")
        .setFooter(".",'https://cdn.discordapp.com/attachments/548602011386642473/548926416381673473/65.jpg')
      message.author.sendEmbed(Embed11)
    }
});

Hattan.login('NTI5MzYxMTY1MDk3MTA3NDc3.D1MfIg.22A9QUa5JAq7gZYfmx-fIKw8Vgk');
