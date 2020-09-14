// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'set',
	description: '',
	aliases: [],
	execute(message, args) {
		const Discord = require('discord.js');
		const ascii = require('ascii-art');
		const client = new Discord.Client();
		const { prefix } = require('../files/config.json');
		const fs = require('fs');
		

            
        const file = `./guild_settings/${message.guild.id}.json`

        fs.access(file, fs.F_OK, (err) => {
          if (err) {
                // si le fichier n'existe pas 

            fs.writeFileSync(file, `
            {
                "autorole": "( non definie )",
                "welcome": "( non definie )"
            }
            `)
            const SetEmbed = new Discord.MessageEmbed()
                    .setColor('#18ffff')
                    .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
                    .setTitle(`LeBotDeSkwal.GUILD_SETTINGS`)
                    .setDescription(`Voici les paramètres de votre serveur, vous pouvez les modifier, entrez la commande !set.help pour plus d'informations : 

                    Channel des messages de bienvenue / au revoir : ( non defini ) 
                    Aurorole : ( non definie ) 

                    **[Aide](https://discord.com/invite/U4ryW8Y) ● [GitHub](https://github.com/SkwalExe) ● [Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
                    
                    .setThumbnail("https://img.icons8.com/bubbles/2x/help.png")

                    .setTimestamp();
                    message.channel.send(SetEmbed)
                    return
          
            }

            // si le fichier existe 
            
                    delete require.cache[require.resolve(`../guild_settings/${message.guild.id}`)]
                        if(isNaN(require(`../guild_settings/${message.guild.id}`).welcome)) {WelcomeChannel = "( non definie )"} else {WelcomeChannel = message.guild.channels.cache.find(ch => ch.id == require(`../guild_settings/${message.guild.id}`).welcome ).name}
                        if(isNaN(require(`../guild_settings/${message.guild.id}`).autorole)) {autorole = "( non definie )"} else {autorole = message.guild.roles.cache.find(role => role.id == require(`../guild_settings/${message.guild.id}`).autorole).name}
                    
                    

                    const SetEmbed = new Discord.MessageEmbed()
                        .setColor('#18ffff')
                        .setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
                        .setTitle(`LeBotDeSkwal.GUILD_SETTINGS`)
                        .setDescription(`Voici les paramètres de votre serveur, vous pouvez les modifier, entrez la commande !set.help pour plus d'informations : 

                        Channel des messages de bienvenue / au revoir : ${WelcomeChannel}
                        Autorole : ${autorole}

                        **[Aide](https://discord.com/invite/U4ryW8Y) ● [GitHub](https://github.com/SkwalExe) ● [Notre chaine](https://youtube.com/Skwal) ● [Notre site web](https://skwal.tk) ● [Invitez moi](https://discord.com/api/oauth2/authorize?client_id=739794179072196704&permissions=8&scope=bot)**`)
                        
                        .setThumbnail("https://img.icons8.com/bubbles/2x/help.png")

                        .setTimestamp();
                        message.channel.send(SetEmbed)
        })

      



                    


            







	}
};
