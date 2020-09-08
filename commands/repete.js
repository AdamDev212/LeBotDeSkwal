// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'dis',
	description: '',
	aliases: ['repete', 'dit'],
	execute(message, args) {
		const Discord = require('discord.js');
		const ascii = require('ascii-art');
		const client = new Discord.Client();
		const { prefix } = require('../config.json');
        const fs = require('fs');
		function GetRandomInt(min, max){
    
			min = Math.ceil(min);
			max = Math.floor(max);
			RandomInt =  Math.floor(Math.random() * (max - min +1)) + min;
	
        }
        if(message.content.startsWith("!dis") || message.content.startsWith('!dit')) word = message.content.substring(4, 10000)
        if(message.content.startsWith('!repete')) word = message.content.substring(7, 10000)


		if(message.author.id == "672823761723981889") {
			message.delete()
		}
        message.channel.send(word)






	}
};
