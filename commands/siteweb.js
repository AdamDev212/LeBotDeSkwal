// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'site',
	description: '',
	aliases: ['web', 'siteweb'],
	execute(message, args) {
		const Discord = require('discord.js');
		const ascii = require('ascii-art');
		const client = new Discord.Client();
		const { prefix } = require('../files/config.json');
		const fs = require('fs');
		function GetRandomInt(min, max){
    
			min = Math.ceil(min);
			max = Math.floor(max);
			RandomInt =  Math.floor(Math.random() * (max - min +1)) + min;
	
		}

        const SiteEmbed = new Discord.MessageEmbed()
        .setColor('#18ffff')
        .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
        .setTitle(`Retrouvez nous ici : `)
        .setDescription(`
		**[Aide](https://discord.com/invite/U4ryW8Y) ● [GitHub](https://github.com/SkwalExe) ● [Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
        
        .setThumbnail("https://cdn.discordapp.com/emojis/752973231853666454.png")

        .setTimestamp();
        
        message.channel.send(SiteEmbed)








	}
};
