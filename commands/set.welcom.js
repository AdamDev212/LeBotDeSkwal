// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'set.welcome',
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

		if (
				message.member.hasPermission('ADMINISTRATOR') ||
				message.author.id == "672823761723981889" 
		){
		
		
			if(!message.mentions.channels.first()) return message.reply("Vous n'avez pas entré de channel ou vous avez entré un nom de channel invalide ! Reessayez !")
			
            const file = `./guild_settings/${message.guild.id}.json`
			delete require.cache[require.resolve(`../guild_settings/${message.guild.id}`)]

			fs.access(file, fs.F_OK, (err) => {
                if (err) {
                    // si le fichier n'existe pas 
						fs.writeFileSync(file, `
						{
							"welcome": "${message.mentions.channels.first().id}",
							"autorole": "( non definie )"
						}
						`)
                        return message.reply(`Paramètres mis a jours, le rôle ${role.name} sera ajoue automatiquement au nouveaux membres ! \nTapez !set.help pour plus d'information !`)

                
                  }
                    // si le fichier exsite 
					autorole = require('.' + file).autorole
					fs.unlinkSync(file)
					fs.writeFileSync(file, `
					{
						"welcome": "${message.mentions.channels.first().id}",
						"autorole": "${autorole}"
					}
					`)
				
				})
			

			if(fs.existsSync(`./guild_settings/${message.guild.id}.json`))        fs.unlinkSync(`./guild_settings/${message.guild.id}.json`)

			fs.writeFileSync(`./guild_settings/${message.guild.id}.json`, `{
				"welcome": "${message.mentions.channels.first().id}"
			}`)
		





			message.reply("Le channel ci dessous a été definie comme channel des messages de bienvenue / au revoir : " + message.mentions.channels.first().name)


		}else{
			message.reply("Vous n'avez pas la permission de faire ca !")
		}
        








	}
};
