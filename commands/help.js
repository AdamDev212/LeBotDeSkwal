// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'help',
	description: "Envoie un message d'aide !",
	aliases: ['commands', 'info', 'infos'],
	cooldown: 1,
	execute(message, args) {
        const data = [];
        const { prefix } = require('../config.json');

		const { commands } = message.client;
		const Discord = require('discord.js');
		const HelpEmbed = new Discord.MessageEmbed()
                                .setColor('#18ffff')
                                .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
                                .setTitle(`Aide LeBotDeSkwal`)
                                .setDescription(`Bonjour, Je suis un bot, On m'appelle LeBotDeSkwal parce que..... Bah parce que j'ai été crée par Skwal t'es con ou quoi xD, 
                                Je suis un bot open source, cela signifie que tu peux aller jeter un coup d'oeil a mon code [ici](https://github.com/SkwalExe/LeBotDeSkwal)
                                Toi, oui toi, tu peut me parler en commançant tes message par un ${prefix} 
                                En attendant, voici ce que je peux faire :  
                                **${prefix}help** : Affiche ce message
                                **${prefix}ascii **{text} : genere le text spécifié en art ascii !
                                **${prefix}ban** {user} : Banni l'utilisateur spécifié si vous en avez l'autorisation ! 
                                **${prefix}kick** : Exclu l'utilisateur spécifié si vous en avez l'autorisation ! 
                                **${prefix}ascii** {text} : convertit le text specifie en [ASCII ART](https://fr.wikipedia.org/wiki/Art_ASCII)
                                Vous pouvez aussi me parler comme a votre ami 
                                **Exemple** : ${prefix}yo, ${prefix}ca va, ${prefix}tu fais quoi, ${prefix}raconte moi une blague....
                                **PS** : n'oublie pas de t'abonner a notre chaine si ce n'est pas deja fait  
                                
                                **[Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
                                
                                .setThumbnail("https://img.icons8.com/bubbles/2x/help.png")

                                .setTimestamp();
                                
                                message.channel.send(HelpEmbed)
	},
};
