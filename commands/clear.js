// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'clear',
	description: 'Clear up to 99 messages.',
	execute(message, args) {

		if (message.member.hasPermission('ADMINISTRATOR')) {

			const amount = parseInt(args[0]) + 1;

			if (isNaN(amount)) {
				return message.reply('Vous devez specifier un nombre !');
			} else if (amount <= 1 || amount > 100) {
				return message.reply('Vous devez spécifier un nombre coprit entre 1 et 99.');
			}
	
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('Une erreur est survenue lors de l\'execution de la commande');
			});

		}
		else{
			message.reply("Vous n'avez pas la permission de faire ca !");
		}

		
	},
};