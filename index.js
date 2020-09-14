// Integralement codé par Skwal, Leopold Koprivnik Ibghy
const fs = require('fs'); // importation du module 'fs'
const Discord = require('discord.js'); // importation du module discord.js
const botjs = require(`./files/bot.js`); // importation de bot.js
const insult_detection = require('./files/insult_detection.js')

const { prefix, token } = require('./files/config.json'); // importation du prefix et du token a partir du fichier config.json
const emojis = require('./commands/emojis.js');
const client = new Discord.Client(); // création d'une constante client qui est egale a new Discord.Client()

client.login(token); // on fait se connecter le bot 

client.commands = new Discord.Collection(); // defnir client.commands qui est egale a une collection de Discord
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //



const cooldowns = new Discord.Collection();

client.once('ready', () => { // quand le bot est pret :
	console.clear() // effacer l'ecran de la console 
	console.log('\33[92mClient ready at \33[94m' + client.user.tag + '\33[92m'); // on imprinte 'client ready at client.user.tag' dans la console 
    client.user.setActivity('Visual Studio Code', { type: 'PLAYING' }); // on definie le statut du bot 
});


client.on('message', (message) =>{ // quand il y a un message alors :
	

	for (const file of commandFiles) {
		delete require.cache[require.resolve(`./commands/${file}`)]
		const command = require(`./commands/${file}`);
		
		client.commands.set(command.name, command);
	}

	

	if(!message.channel.guild & !message.author.bot) {
		console.log(message.author.username, 'a dit :\33[94m', message.content.toLocaleLowerCase(), '\33[92m\nEn MP \33[92m') // on empreinte ce que contient le message dans la console 
		
		GetRandomInt(1, 7)
		
		if( RandomInt == 1) Answer = "QnJhdm8sIHR1IHZpZW5zIGRlIHBlcmRyZSAyIG1pbnV0ZXMgZGUgdmllLg=="
		if( RandomInt == 2) Answer = "PTDR T KI ?"
		if( RandomInt == 3) Answer = "Je te préférais quand tu ne parlais pas."
		if( RandomInt == 4) Answer = "Raconte pas ta vie !"
		if( RandomInt == 5) Answer = "J'ai été conçu pour t'ignorer... mince.		"
		if( RandomInt == 6) Answer = "Ce que tu dis est très intéressant, et cette phrase est un mensonge.		"
		if( RandomInt == 7) Answer = "Y29kZSBkZSBsJ2Vhc3RlciBlZ2cgOiBTa3dhbDAxMjQ1MTAyMDUwMTAw"
		if( RandomInt == 8) Answer = "Les humains parlent beaucoup...."
		console.log("\33[92mEnvoie de la reponse : \33[94m" + Answer) // on empreinte ce que contient le message dans la console 

		return message.channel.send(Answer); // si la conversation se passe dans un DM alors on annule
	}
		if (!message.content.startsWith(prefix) || message.author.bot) return; // si le message ne commence pas par un point d'exclamation ou que l'hauteur du message est un bot alors on annule 

		console.log(message.author.username, 'a dit :\33[94m', message.content.toLocaleLowerCase(), '\33[92m\nDans le serveur : \33[94m', message.guild.name, '\33[92m') // on empreinte ce que contient le message dans la console 

	botjs.execute(message, client); // on execute bot.js 
	insult_detection.execute(message, client);
	
	const args = message.content.slice(prefix.length).trim().split(/ +/); // on defini args  
		const commandName = args.shift().toLowerCase(); //
		
		const command = client.commands.get(commandName)
			|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		
			
		if (!command) return; 



		command.execute(message, args);


});










client.on('guildMemberRemove', member => {


	const ByeEmbed = new Discord.MessageEmbed()
			.setColor('#18ffff')
			.setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
			.setTitle(':sneezing_face: Bon depart, tu nous manqueras :sob::cry:')
			.setDescription(`:sneezing_face: ${member} Vient de QUITTER le serveur ! :sob::cry: `)
			.setThumbnail(member.user.avatarURL())
			.setTimestamp();
			
			file = `./guild_settings/${member.guild.id}`

			fs.access(file, fs.F_OK, (err) => {
                if (err) {
                    // si le fichier n'existe pas 
      
                        return

                
                  }
                    // si le fichier exsite 
					delete require.cache[require.resolve(file)]

				
				})




				if(isNaN(require(file).welcome)) {
					console.log(member.username + ' vient juste de quitter le serveur \33[92m' + member.guild.name);
				}else{
					console.log(member.username + ' vient juste de quitter le serveur \33[92m' + member.guild.name + " \33[94m, message d'en revoir envoyé dans le channel " + member.guild.channels.cache.find(ch => ch.id == require(file).welcome).name);

					member.guild.channels.cache.find(ch => ch.id === require(file).welcome).send(ByeEmbed);
				}


	

	
			
});

client.on('guildMemberAdd', member => {

	const WelcomeEmbed = new Discord.MessageEmbed()
			.setColor('#18ffff')
			.setAuthor('LeBotDeSkwal', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
			.setTitle(`Bienvenue dans le serveur ${member.guild.name} ! <a:hi:744172079917695012> <a:dance:744172321723383838>`)
			.setDescription(`${member} Vient de rejoindre le serveur ! <a:hi:744172079917695012> <a:dance:744172321723383838> `)
			.setThumbnail(member.user.avatarURL())
			.setFooter("Si tu as des question, n'hesite pas a les poser !")
			.setTimestamp();
			

			file = `./guild_settings/${member.guild.id}`

			fs.access(file, fs.F_OK, (err) => {
                if (err) {
                    // si le fichier n'existe pas 
      
                        return

                
                  }
                    // si le fichier exsite 
					delete require.cache[require.resolve(file)]

				
				})


				if(isNaN(require(file).welcome)) {
					console.log(member.username + ' vient juste de rejoindre le serveur \33[92m' + member.guild.name);
				}else{
					console.log(member.username + ' vient juste de rejoindre le serveur \33[92m' + member.guild.name + '\33[94m, \nmessage de bienvenue envoyé dans le channel ' + member.guild.channels.cache.find(ch => ch.id == require(file).welcome).name);
					delete require.cache[require.resolve(file)]

					member.guild.channels.cache.find(ch => ch.id === require(file).welcome).send(WelcomeEmbed);
				}



				if(isNaN(require(file).autorole)) {
					console.log(member.username + ' vient juste de rejoindre le serveur \33[92m' + member.guild.name + ", \nAucun rôle n'a été attribué !");

				}else {
					member.roles.add(member.guild.roles.cache.find(role => role.id == require(file).autorole))
					console.log(member.username + ' vient juste de rejoindre le serveur \33[92m' + member.guild.name + '\33[94m, \nLe rôle ' + member.guild.roles.cache.find(r => r.id == require(file).autorole).name);

				}


				member.send(WelcomeEmbed)
	
});




function GetRandomInt(min, max){
    
			min = Math.ceil(min);
			max = Math.floor(max);
			RandomInt =  Math.floor(Math.random() * (max - min +1)) + min;
			
		}