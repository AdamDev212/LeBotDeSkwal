// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'member',
	description: '',
	aliases: ['member.count'],
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

        var membersize = message.guild.members.cache.filter(member => !member.user.bot).size;
        message.channel.send("Nombre de membre présents dans le serveur : " + membersize)








	}
};
