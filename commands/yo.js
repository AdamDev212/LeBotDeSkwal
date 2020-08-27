module.exports = {
	name: 'yo',
	aliases: ['yo le bot', 'et le bot', 'wsh', 'bonjour', 'hey', 'LeBotDeSkwal', 'hé, dis', 'hé le bot', 'wesh', 'he le bot'],
	execute(message, args) {
        const Discord = require('discord.js');
		const ascii = require('ascii-art');
		const client = new Discord.Client();
		const { prefix } = require('../config.json');
		const fs = require('fs');
        message.channel.send(`Ouai mec qu'est ce qu'y a ? Parle moi en commançant tes message par '${prefix}'`);

	},
};
