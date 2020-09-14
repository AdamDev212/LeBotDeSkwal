// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'set.autorole',
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
		
		
			if(!message.mentions.roles.first()) return message.reply("Vous n'avez pas mentionné de rôle ou vous avez entré un nom de rôle invalide ! Reessayez !")
			const role = message.mentions.roles.first()
            

            
            const file = `./guild_settings/${message.guild.id}.json`
            
            
            fs.access(file, fs.F_OK, (err) => {
                if (err) {
                    // si le fichier n'existe pas 
      
                        fs.writeFileSync(file, `
                        {
                            "autorole": "${role.id}",
                            "welcome": "( non definie )"
                        }
                        `)

                        return message.reply(`Paramètres mis a jours, le rôle ${role.name} sera ajoue automatiquement au nouveaux membres ! \nTapez !set.help pour plus d'information !`)

                
                  }
                    // si le fichier exsite 
                    WelcomeChannel = require('.' + file).welcome
                    fs.unlinkSync(file) 
                    fs.writeFileSync(file, `
                    {
                        "welcome": "${WelcomeChannel}",
                        "autorole": "${role.id}"
                    }
                    
                    `)

                    message.reply(`Paramètres mis a jours, le rôle ${role.name} sera ajoue automatiquement au nouveaux membres ! \nTapez !set.help pour plus d'information !`)
              })







		}else{
			message.reply("Vous n'avez pas la permission de faire ca !")
		}
        




	}
};
