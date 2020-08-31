const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('\33[92mClient ready at \33[94m' + client.user.tag);
    client.user.setActivity('Visual Studio Code', { type: 'PLAYING' });
});

client.on('message', message => {
	
	try {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	console.log('\33[92mNouveau message :\33[94m', message.content.toLocaleLowerCase())
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const botjs = require(`./bot.js`);
	botjs.execute(message, client);
	
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	
	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('erreur : je ne peux pas faire ca en message privé !');
	}

	if (command.args && !args.length) {
		let reply = `Vous n'avez spécifié aucun arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nVoici la syntaxe de la commande : \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Veuillez attendre ${timeLeft.toFixed(1)} secondes de d'utiliser la commande \`${command.name}\` a nouveau.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	
		
	
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Une erreur est survenue ! details : \n' + error);
	}
});

client.on('guildMemberRemove', member => {


	const ByeEmbed = new Discord.MessageEmbed()
			.setColor('#18ffff')
			.setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
			.setTitle(':sneezing_face: Bon depart, tu nous manqueras :sob::cry:')
			.setDescription(`:sneezing_face: ${member} Vient de QUITTER le serveur ! :sob::cry: `)
			.setThumbnail(member.user.avatarURL())
			.setTimestamp();
			



	const channel = member.guild.channels.cache.find(ch => ch.name === '『👋』𝗠𝗲𝗺𝗯𝗿𝗲𝘀');
	channel.send(ByeEmbed);



	try {
		member.send(ByeEmbed)
	} catch (error) {
		console.log("\33[91m Impossible d'envoyer un message a l'utilisateur ! \nDetails : ", error)
	}
			
});

client.on('guildMemberAdd', member => {
	const WelcomEmbed = new Discord.MessageEmbed()
			.setColor('#18ffff')
			.setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
			.setTitle(`Bienvenue dans le serveur ${member.guild.name} ! <a:hi:744172079917695012> <a:dance:744172321723383838>`)
			.setDescription(`${member} Vient de rejoindre le serveur ! <a:hi:744172079917695012> <a:dance:744172321723383838> `)
			.setThumbnail(member.user.avatarURL())
			.setFooter("Si tu as des question, n'hesite pas a les poser !")
			.setTimestamp();
			



	const channel = member.guild.channels.cache.find(ch => ch.name === '『👋』𝗠𝗲𝗺𝗯𝗿𝗲𝘀');
	channel.send(WelcomEmbed);



	try {
		member.send(WelcomEmbed);
	} catch (error) {
		console.log("\33[91m Impossible d'envoyer un message a l'utilisateur ! \nDetails : ", error)
	}
});

client.on('message', message => {

	if(!message.author.bot & message.content.startsWith(prefix)){
			if ( message.content.includes('merde') || 
			message.content.includes(' moche') || 
			message.content.includes(' gueule') || 
			message.content.endsWith(' con') ||
			message.content.includes('putain') || 
			message.content.includes('pute') || 
			message.content.includes('salope') || 
			message.content.includes('tg') || 
			message.content.includes('batard') || 
			message.content.includes(' con ') || 
			message.content.includes('connard') || 
			message.content.includes('Connard') || 
			message.content.includes('enculer') || 
			message.content.includes('Enculer') || 
			message.content.includes('nique') || 
			message.content.includes(' enfoiré')
			){
					message.react('😭');
					message.channel.send("Hé euuuuu pourquoi tu m'insulte sniffff snifff :cry:");
                
			}

			
			if (message.content ===`${prefix}encore`                        ){
					message.channel.send("@" + message.author.username + " Encore Quoi ?");
                
			}
	}
	
	
});

client.login(token);