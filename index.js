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
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	console.log(`Nouveau message '${message.content.toLocaleLowerCase()}'`)

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return message.reply('erreur : commande introuvable !');

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

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Une erreur est survenue ! details : \n' + error);
	}
});

client.login(token);