const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Komutlar :**")
        .setThumbnail("https://images-ext-2.discordapp.net/external/PiJp35u3aqqftbkBNHuo_4M-q3c-5rqxaizhHrSJ-TE/https/cdn.discordapp.com/icons/478640219235680259/a05c679974b7d1ab853802e865960d07.webp")
        .setColor(0x00AE86)
        .addField("/yardım", "Bu mesajı gönderir.", true)
        .addField("/öneri <mesaj>", "Botumuz için önerilerinizi bize bildirmenizi sağlar.", true)
        .addField("/ping", "Botun pingini öğrenmenizi sağlar.", true)
        .addField("/avatar", "Avatarınızı sohbete atar.", true)
        .addField("/sor <mesaj>", "Bota sorular sorup cevap almanızı sağlar.", true)
        .addField("/slot", "Bir slot oyunu başlatır.", true)
		.addField("/stresçarkı", "Sizin için bir stres çarkı çevirir ve bilgilerini gösterir.", true)
        .addField("/sil <miktar>", "Yetkili Özel | Belirttiğiniz kadar mesaj siler.", true)
        .addField("/yaz <mesaj>", "Yetkili Özel | Bota mesaj yazdırır.", true)
   message.channel.send(embed)
   
   
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yardım', 
  description: 'Komutlar hakkında bilgi verir.',
  usage: 'yardım'
};