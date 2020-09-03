// Integralement codé par Skwal, Leopold Koprivnik Ibghy

const fs = require('fs'); // importation du module 'fs'
const Discord = require('discord.js'); // importation du module discord.js
const botjs = require(`./bot.js`); // importation de bot.js


const { prefix, token } = require('./config.json'); // importation du prefix et du token a partir du fichier config.json
const client = new Discord.Client(); // création d'une constante client qui est egale a new Discord.Client()

client.login(token); // on fait se connecter le bot 

client.commands = new Discord.Collection(); // defnir client.commands qui est egale a une collection de Discord
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => { // quand le bot est pret :
	console.clear() // effacer l'ecran de la console 
	console.log('\33[92mClient ready at \33[94m' + client.user.tag); // on imprinte 'client ready at client.user.tag' dans la console 
    client.user.setActivity('Visual Studio Code', { type: 'PLAYING' }); // on definie le statut du bot 
});


client.on('message', message => { // quand il y a un message alors :
	


	if(!message.channel.guild & message.author.bot ) return message.channel.send("Je suis desole maisssss.... je ne paut pas te parler ici, seulement sur un serveur !") // si la conversation se passe dans un DM alors on annul



	try { // essaie :


		if (!message.content.startsWith(prefix) || message.author.bot) return; // si le message ne commence pas par un point d'exclamation ou que l'hauteur du message est un bot alors on annule 
		
		console.log('\33[92mNouveau message :\33[94m', message.content.toLocaleLowerCase()) // on empreinte ce que contient le message dans la console 
		const args = message.content.slice(prefix.length).trim().split(/ +/); // on defini args  
		const commandName = args.shift().toLowerCase(); //
		botjs.execute(message, client); // on execute bot.js 
		
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

	if(!message.author.bot & message.content.startsWith(prefix) & !message.content.startsWith('!dis') & !message.content.startsWith('!repete')){
			if ( message.content.toLowerCase().includes('merde') || // si le message contient : merde
			message.content.toLowerCase().includes(' moche') ||  // si le message contient : moche
			message.content.toLowerCase().includes(' gueule') ||  // si le message contient : gueule
			message.content.toLowerCase().endsWith(' con') || // si le message contient : con
			message.content.toLowerCase().includes('putain') ||  // si le message contient : putain
			message.content.toLowerCase().includes('pute') ||  // si le message contient : pute
			message.content.toLowerCase().includes('salope') ||  // si le message contient : salope
			message.content.toLowerCase().includes('tg') ||  // si le message contient : tg
			message.content.toLowerCase().includes('batard') ||  // si le message contient : batard
			message.content.toLowerCase().includes(' con ') ||  // si le message contient : con
			message.content.toLowerCase().includes('connard') ||  // si le message contient : connard
			message.content.toLowerCase().includes('enculer') ||  // si le message contient : enculer
			message.content.toLowerCase().includes('nique') ||  // si le message contient : nique
			message.content.toLowerCase().includes(' enfoiré') // si le message contient : enfoiré
			){

					message.react('😭'); // le bot reagis au message par 😭
					message.channel.send("Hé euuuuu pourquoi tu m'insulte sniffff snifff :cry:"); // le bot envoie "Hé euuuuu pourquoi tu m'insulte sniffff snifff :cry:"
                
			}


			if (message.content ===`${prefix}encore`                        ){
					message.channel.send("@" + message.author.username + " Encore Quoi ?");
                
			}
	}
	
	
});
