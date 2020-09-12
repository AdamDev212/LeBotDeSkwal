// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'ban',
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




            if 
            (
                    message.member.hasPermission('ADMINISTRATOR') ||
                    message.author.id == "672823761723981889"

                    
            ){
                    const user = message.mentions.users.first();
                    if (
                            user
                    ){
                            const member = message.guild.member(user);
                            if (
                                    member
                            ){

                                    member
                                            .ban()
                                            .then(() => {
                                                    message.reply(`${user.tag} a été banni du serveur avec succes !`);
                                                    console.log(`${user.tag} a été banni du serveur !`)
                                            })
                                    .catch(err => {
                                            message.reply("Impossible de bannir ce membre !");
                                            console.error(err);
                                    });
                                    } 
                                    else 
                                    {
                                            message.reply("L'utilisateur n'est pas present dans le serveur !");
                                    }
                                } 
                                else 
                                {
                                            message.reply("Vous n'avez mentionné aucun utilisateur a bannir !");
                                }
            }
            else
            {
                    message.channel.send("Vous n'avez pas la permission de faire ca !");
                    return;
            }









	}
};
