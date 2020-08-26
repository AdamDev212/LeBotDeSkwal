module.exports = {
    name: 'kick',
    execute(message, args){
        const Discord = require('discord.js');
        const fs = require('fs');
        const { prefix, token } = require('../config.json');

        const client = new Discord.Client();
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
                                        .kick()
                                        .then(() => {
                                                message.reply(`${user.tag} a été exclu avec succes !`);
                                                console.log(`${user.tag} a été exclu du serveur !`)
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

