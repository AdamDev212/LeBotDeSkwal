//#region DEMARRAGE 
        const Discord = require('discord.js');
        const fs = require('fs')
        const { prefix, token } = require('./config.json');
        const client = new Discord.Client();
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        client.login(token)        
        client.commands = new Discord.Collection();
        client.once('ready', () => {
                console.clear();
                console.log('\33[92mClient ready at \33[94m' + client.user.tag);
                client.user.setActivity('Visual Studio Code', { type: 'PLAYING' });
        });
        
//#endregion


for (const file of commandFiles){
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command);
}

client.on('message', message => {
        if(!message.content.toLocaleLowerCase().startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLocaleLowerCase();

        if (!client.commands.has(command)) return message.reply('Erreur : commande introuvable !');

        try {
                client.commands.get(command).execute(message, args);
        } catch (error) {
                message.channel.send('erreur : ' + error);
        }
});