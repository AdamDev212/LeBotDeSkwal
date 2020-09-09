// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: '',
	description: '',
	aliases: [],
	execute(message, args) {
		const Discord = require('discord.js');
		const ascii = require('ascii-art');
		const client = new Discord.Client();
		const { prefix } = require('./config.json');
		const fs = require('fs');
		function GetRandomInt(min, max){
    
			min = Math.ceil(min);
			max = Math.floor(max);
			RandomInt =  Math.floor(Math.random() * (max - min +1)) + min;
	
		}
        if(message.content.startsWith('!ascii')) return;
        if(!message.author.bot & message.content.startsWith(prefix) & !message.content.startsWith('!dis') & !message.content.startsWith('!repete')){
			if ( message.content.toLowerCase().includes('merde') || // si le message contient : merde
			message.content.toLowerCase().includes(' moche') ||  // si le message contient : moche
			message.content.toLowerCase().includes(' gueule') ||  // si le message contient : gueule
			message.content.toLowerCase().endsWith(' con') || // si le message contient : con
			message.content.toLowerCase().includes('putain') ||  // si le message contient : putain
			message.content.toLowerCase().includes('pute') ||  // si le message contient : pute
			message.content.toLowerCase().includes('salope') ||  // si le message contient : salope
			message.content.toLowerCase().includes('tg') ||  // si le message contient : tg
			message.content.toLowerCase().includes('batard') ||  // si le message contient : batard
			message.content.toLowerCase().includes(' con ') ||  // si le message contient : con
			message.content.toLowerCase().includes('connard') ||  // si le message contient : connard
			message.content.toLowerCase().includes('enculer') ||  // si le message contient : enculer
			message.content.toLowerCase().includes('nique') ||  // si le message contient : nique
			message.content.toLowerCase().includes(' enfoiré') // si le message contient : enfoiré
			){

					message.react('😭'); // le bot reagis au message par 😭
					message.channel.send("Hé euuuuu pourquoi tu m'insulte sniffff snifff :cry:"); // le bot envoie "Hé euuuuu pourquoi tu m'insulte sniffff snifff :cry:"
                
			}


			if (message.content ===`${prefix}encore`                        ){
					message.channel.send("@" + message.author.username + " Encore Quoi ?");
                
			}
	}








	}
};
