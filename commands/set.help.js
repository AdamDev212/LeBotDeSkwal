// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'set.help',
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


            const SetEmbed = new Discord.MessageEmbed()
                                            .setColor('#18ffff')
                                            .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
                                            .setTitle(`LeBotDeSkwal.SET`)
                                            .setDescription(`**${prefix}set.welcome** {#channel} : Definie le channel des messages de bienvenue
											**${prefix}set.autorole** : Definie le role donné automatiquement a l'arrivé d'un nouveau membre 
											**${prefix}set.reset** : remet tout les paramètres a leur valeur par defaut !

                                            **PS** : n'oublie pas de t'abonner a notre chaine si ce n'est pas deja fait  
                                            
											**[Aide](https://discord.com/invite/U4ryW8Y) ● [GitHub](https://github.com/SkwalExe) ● [Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
                                            
                                            .setThumbnail("https://img.icons8.com/bubbles/2x/help.png")

                                            .setTimestamp();
                                            
            message.channel.send(SetEmbed)







	}
};
