// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'ascii',
	description: '',
	aliases: [],
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



            if
            (
                    message.content.substring(6, 10000)
            ){

                    
                    ascii.font(message.content.substring(6, 10000), 'Doom', function (err, rendered) {
                                                                    
                            if(
                                    rendered.length < 1999
                            ){
                                    if(
                                    
                                            err
                                    ){
                                            message.reply(err)
                                    }
                                    else{

                                            message.channel.send("```" + rendered + "```")
                                            
                                            
                                    }
                            }
                            else{
                                    message.reply('erreur : votre message contient trop de caractere !')
                            }
                    
                            
                            
                    });
            }
            else
            {
                    message.reply('erreur : vous devez specifier du text pour la convertion ASCII !')
            }







	}
};
