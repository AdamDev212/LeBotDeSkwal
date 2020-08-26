module.exports = {
    name: 'info',
    execute(message){
        const Discord = require('discord.js');
        const fs = require('fs');
        const { prefix, token } = require('../config.json');

        const client = new Discord.Client();

        const HelpEmbed = new Discord.MessageEmbed()
                                .setColor('#18ffff')
                                .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
                                .setTitle(`Aide LeBotDeSkwal`)
                                .setDescription(`Bonjour, Je suis un bot, On m'appelle LeBotDeSkwal parce que..... Bah parce que j'ai été crée par Skwal t'es con ou quoi xD, 
                                Toi, oui toi, tu peut me parler en commançant tes message par un ${prefix} 
                                En attendant, voici ce que je peux faire :  
                                **${prefix}help** : Affiche ce message
                                **${prefix}set** : Modifier les parametres du bot !  
                                **${prefix}ban** {user} : Banni l'utilisateur spécifié si vous en avez l'autorisation ! 
                                **${prefix}kick** : Exclu l'utilisateur spécifié si vous en avez l'autorisation ! 
                                **${prefix}ascii** {text} : convertit le text specifie en [ASCII ART](https://fr.wikipedia.org/wiki/Art_ASCII)
                                Vous pouvez aussi me parler comme a votre ami 
                                **Exemple** : ${prefix}yo, ${prefix}ca va, ${prefix}tu fais quoi, ${prefix}raconte moi une blague....
                                **PS** : n'oublie pas de t'abonner a notre chaine si ce n'est pas deja fait  
                                
                                **[Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
                                
                                .setThumbnail("https://img.icons8.com/bubbles/2x/help.png")

                                .setTimestamp();
                                
                                message.channel.send(HelpEmbed)
    }
};

