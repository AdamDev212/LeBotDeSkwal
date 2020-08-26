module.exports = {
    name: 'ban',
    execute(message, args){
        const Discord = require('discord.js');
        const fs = require('fs');
        const { prefix, token } = require('../config.json');

        const client = new Discord.Client();

          

        client.on('message', message => {
            if (!message.guild) return;
            if(
                    message.content.toLocaleLowerCase().startsWith(`${prefix}ban`)

            ){
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
            
            
            
        });

        
    }
};

