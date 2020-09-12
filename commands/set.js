// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'set',
	description: '',
	aliases: [],
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

            WelcomeChannel = message.guild.channels.cache.find(ch => ch.id === require(`../configuration/${message.guild.id}`).welcome ).name
            const SetEmbed = new Discord.MessageEmbed()
                    .setColor('#18ffff')
                    .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
                    .setTitle(`LeBotDeSkwal.SERVER_SETTINGS`)
                    .setDescription(`Voici les paramètres de votre serveur, vous pouvez les modifier, entrez la commande !set.help pour plus d'informations : 

                    Channel des messages de bienvenue / au revoir : ${WelcomeChannel}
                    
                    **[Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
                    
                    .setThumbnail("https://img.icons8.com/bubbles/2x/help.png")

                    .setTimestamp();
                    
            message.channel.send(SetEmbed)







	}
};
