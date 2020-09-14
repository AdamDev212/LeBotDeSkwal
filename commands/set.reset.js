// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'set.reset',
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
		
            const file = `./guild_settings/${message.guild.id}.json`
            
            
            fs.access(file, fs.F_OK, (err) => {
                if (err) {
      
      
                  console.error(err)
                        message.reply("Les paramètres du serveur ont été reinitiélisés a leur valeur d'origine")

                          return
                
                  }

                    fs.unlinkSync(file)
                    message.reply("Les paramètres du serveur ont été reinitiélisés a leur valeur d'origine")
              })
      
            
      




            


        }else{
            message.reply("Vous n'avez pas la permission de faire cela !")
        }








	}
};
