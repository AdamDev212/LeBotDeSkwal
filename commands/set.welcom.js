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


        if(!message.mentions.channels.first()) return message.reply("Vous n'avez pas entré de channel ou vous avez entrez un nom de channel invalide ! Reessayez !")
        
        message.reply("Le channel ci dessous a été definie comme channel des messages de bienvenue / au revoir : " + message.mentions.channels.first().name)

        if(fs.existsSync(`./configuration/${message.guild.id}.json`))        fs.unlinkSync(`./configuration/${message.guild.id}.json`)

        fs.writeFileSync(`./configuration/${message.guild.id}.json`, `{
            "welcome": "${message.mentions.channels.first().id}"
        }`)








	}
};
