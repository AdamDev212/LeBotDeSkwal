// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'kick',
	description: 'kick the first mentionned user of the message from the server',
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
                    message.member.hasPermission('ADMINISTRATOR') 

                    
            ){
                    const user = message.mentions.users.first();
                    if (
                            user
                    ){
                            const member = message.guild.member(user);
                            if (
                                    member
                            ){
                                //member.send(ByeEmbed)

                                    member
                                            
                                            .kick()
                                            .then(() => {
                                                    message.reply(`${user.tag} a été exclu avec succes !`);
                                                    console.log("\33[91m envent : ", user.tag,  `a été exclu du serveur !`)
                                            })
                                            .catch(err => {
                                                    message.reply("Impossible d'exclure ce membre !");
                                                    // console.error(err);
                                            });
                                    } 
                                    else 
                                    {
                                            message.reply("L'utilisateur n'est pas present dans le serveur !");
                                    }
                                    } 
                                    else 
                                    {
                                            message.reply("Vous n'avez mentionné aucun utilisateur a exclure !");
                                    }
            }
            else
            {
                    message.channel.send("Vous n'avez pas la permission de faire ca !")
            }








	}
};
