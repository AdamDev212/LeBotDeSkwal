// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'ping',
	description: 'Ping !',
	cooldown: 0,
	execute(message, client) {		
		message.reply(message.guild.emojis.cache.size)
		

	},
};
