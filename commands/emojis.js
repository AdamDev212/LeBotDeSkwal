// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'emoji',
	description: '',
	aliases: ['emojis', 'emoticon', 'emoticons'],
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


        
        if (message.guild.emojis.cache.size == 0){

            message.reply("Ce serveur de ne possede aucun emojis !");
        
        }else{

        

        const emojiObj = {
            0: []
          }
          let counter = 0 // Dynamically create embed fields based on character count
          message.channel.guild.emojis.cache.forEach(emoji => {
            if (emojiObj[counter].join('\n').length < 950) {
                if (emoji.animated == false)emojiObj[counter].push(`<:${emoji.name}:${emoji.id}>`)
                if (emoji.animated == true)emojiObj[counter].push(`<a:${emoji.name}:${emoji.id}>`)
              
            } else {
              counter++
              emojiObj[counter] = []
              emojiObj[counter].push(`<:${emoji.name}:${emoji.id}>`)
            }
          })
          Object.keys(emojiObj).forEach(key => {
          message.channel.send(emojiObj[key].join('\n'))
          })
        }


	}
};
