// Integralement codé par Skwal, Leopold Koprivnik Ibghy

module.exports = {
	name: 'botjs',
	description: 'System permetant au bot de parler au utilisateur comme a son ami',
	aliases: [],
	execute(message, client) {
		const Discord = require('discord.js');
		const ascii = require('ascii-art');
		const { prefix } = require('./config.json');
                const fs = require('fs');
		function GetRandomInt(min, max){
                        
			min = Math.ceil(min);
			max = Math.floor(max);
			RandomInt =  Math.floor(Math.random() * (max - min +1)) + min;
                        
		}






                ////////////////////////////////////////////////////////////////////////////////////////////////////








                        

                        //#region BIENVENUE
                        const command = message.content.toLocaleLowerCase()

                                
                                                
                                        if (
                                                command === `${prefix}yo`  ||
                                                message.content.toLocaleLowerCase()  === `${prefix}yo le bot`  ||
                                                message.content.toLocaleLowerCase()  === `${prefix}wsh`   ||
                                                message.content.toLocaleLowerCase()  === `${prefix}bonjour` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}et le bot`  ||
                                                message.content.toLocaleLowerCase()  === `${prefix}hey`   ||
                                                message  === `${prefix}cv`   ||
                                                message.content.toLocaleLowerCase()  === `${prefix}LeBotDeSkwal`   || 
                                                message.content.toLocaleLowerCase()  === `${prefix}hé, dis`   || 
                                                message.content.toLocaleLowerCase()  === `${prefix}hé le bot!`   || 
                                                message.content.toLocaleLowerCase()  === `${prefix}wesh`  || 
                                                message.content.toLocaleLowerCase()  === `${prefix}`   || 
                                                message.content.toLocaleLowerCase()  === `${prefix}he le bot`  
                                                
                                        ) {

                                                
                                                message.channel.send(`Ouai mec qu'est ce qu'y a ? Parle moi en commançant tes message par '${prefix}'`);
                                                return;
                                                
                                        }

                                

                        //#endregion

                        //#region CA VA 



                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}bien ou bien`             ||
                                                message.content.toLocaleLowerCase()  === `${prefix}ca va`                    ||
                                                message.content.toLocaleLowerCase()  === `${prefix}yo le bot ca va`          ||
                                                message.content.toLocaleLowerCase()  === `${prefix}he le bot comment ca va`  ||
                                                message.content.toLocaleLowerCase()  === `${prefix}cava`                     ||
                                                message.content.toLocaleLowerCase()  === `${prefix}bien ou quoi`             ||
                                                message.content.toLocaleLowerCase()  === `${prefix}commentcavabien`          ||
                                                message.content.toLocaleLowerCase()  === `${prefix}he le bot ca va`          ||
                                                message.content.toLocaleLowerCase()  === `${prefix}yo ca va`                 ||
                                                message.content.toLocaleLowerCase()  === `${prefix}comment tu vas`           ||
                                                message.content.toLocaleLowerCase()  === `${prefix}comment ca va`    ||
                                                message.content.toLocaleLowerCase()  === `${prefix}he le bot comment tu vas`
                                                
                                        ){

                                                GetRandomInt(1, 2)
                                                if (RandomInt == 1){
                                                                message.channel.send("Je Pete La Forme !");
                                                }

                                                if (RandomInt == 2){
                                                                message.channel.send("Je Vais Archi Bien !");
                                                                
                                                }
                                                                
                                        }
                                

                        //#endregion

                        //#region BLAGUE 


                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}raconte moi une blague`           ||
                                                message.content.toLocaleLowerCase()  === `${prefix}raconte une blague`              ||
                                                message.content.toLocaleLowerCase()  === `${prefix}blague`                          || 
                                                message.content.toLocaleLowerCase()  === `${prefix}une blague`                       || 
                                                message.content.toLocaleLowerCase()  === `${prefix}encore une blague`               || 
                                                message.content.toLocaleLowerCase()  === `${prefix}fait moi une blague`             || 
                                                message.content.toLocaleLowerCase()  === `${prefix}fait une blague`                 || 
                                                message.content.toLocaleLowerCase()  === `${prefix}fais une blague`                 || 
                                                message.content.toLocaleLowerCase()  === `${prefix}fais moi une blague`
                                        ) {

                                                
                                                GetRandomInt(1, 17)
                                                if (RandomInt == 1){
                                                        message.channel.send("Comment un développeur tente-t-il de réparer sa voiture lorsqu'il a un problème ?");
                                                        setTimeout(function(){ message.channel.send("Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et essaie de redémarrer."); }, 4000);
                                                        
                                                        return;
                                                }
                                        
                                                if (RandomInt == 2){
                                                        message.channel.send("A quoi sert ineternet explorer ?");
                                                        setTimeout(function(){ message.channel.send("A telecharger Google Chrome !"); }, 2000);
                                                        
                                                        return;
                                                }

                                                if (RandomInt == 3){
                                                        message.channel.send("T'as pris quoi comme résolution pour cette nouvelle année ?");
                                                        setTimeout(function(){ message.channel.send("1080p."); }, 2000);
                                                
                                                        return;
                                                }

                                                if (RandomInt  == 4){
                                                        message.channel.send("Les filles, c'est comme les adresses web, ");
                                                        setTimeout(function(){ message.channel.send("Elles sont toutes déjà prises"); }, 1000);
                                                
                                                        return;
                                                }

                                                if (RandomInt  == 5){
                                                        message.channel.send("De quelle couleur sont tes yeux ?");
                                                        setTimeout(function(){ message.channel.send("#1292f4 et toi ? :)"); }, 1000);
                                                
                                                        return;
                                                }
                                                

                                                if (RandomInt  == 6){
                                                        message.channel.send("Que fait un geek anglais quand il a faim ?");
                                                        setTimeout(function(){ message.channel.send("Il mange du padding."); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 7){
                                                        message.channel.send("Que dit un informaticien en colere ?");
                                                        setTimeout(function(){ message.channel.send("Fichieeeer"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 8){
                                                        message.channel.send("Que Fait un ordinateur sur un bateau ?");
                                                        setTimeout(function(){ message.channel.send("Il rame !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 9){
                                                        message.channel.send("De nos jours, le zip ça devient rar....");

                                                        return;
                                                }
                                                
                                                if (RandomInt  == 10){
                                                        message.channel.send('Dans le manuel du logiciel il y avait ecrit "Nécessite Windows XP ou mieux"');
                                                        setTimeout(function(){ message.channel.send("Donc j'ai installé Linux !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 11){
                                                        message.channel.send("A son mariage, un geek accepte les conditions et termes d'utilisation.");
                                                
                                                        return;
                                                }

                                                if (RandomInt  == 12){
                                                        message.channel.send('Quand est ce que Windows ne bug pas ?');
                                                        setTimeout(function(){ message.channel.send("Quand l'ordinateur est éteint !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 13){
                                                        message.channel.send("Moi j'était un youtubeur qui avait 30  millions d'abonnés j'avais 25 millions de vues par vidéo 10 million de like mais un jour un drame c'est produit : ");
                                                        setTimeout(function(){ message.channel.send("Je Me Suis Reveillé !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 14){
                                                        message.channel.send("Aujourd'hui,notre vie ne tient souvent plus qu'à un fil.");
                                                        setTimeout(function(){ message.channel.send("Celui de notre Chargeur !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 15){
                                                        message.channel.send("Que doit on faire  quand un geek pleure ?");
                                                        setTimeout(function(){ message.channel.send("Il faut le CONSOLER !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 16){
                                                        message.channel.send("Un informaticien ne s'ennuie pas, ");
                                                        setTimeout(function(){ message.channel.send("Il se Fichier !"); }, 1000);
                                                
                                                        return;
                                                }
                                                
                                                if (RandomInt  == 17){
                                                        message.channel.send("Un ordinateur c'est comme un Lama, ");
                                                        setTimeout(function(){ message.channel.send("Il fait que crasher"); }, 1000);
                                                
                                                        return;
                                                }
                                                

                                        }
                                


                        //#endregion

                        //#region PHOTO 


                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}envoie une photo de toi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}envoi une photo de toi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}envois une photo de toi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}envoie moi une photo de toi` 
                                        ){

                                                message.channel.send("https://zupimages.net/up/20/32/ehyk.png");
                                                message.channel.send("Voila ! \nJe suis beau Hein :wink:");
                                                
                                        }

                                

                        //#endregion

                        //#region TCHOUPI 


                                        if (
                                                message.content.toLocaleLowerCase().includes(`tchoupi`) ||
                                                message.content.toLocaleLowerCase().includes(`${prefix}tchoupi`) 
                                        ){

                                                message.channel.send("Salut c'est moi Tchoupi\nJe marche vers l'école\nJ'ai de nouveaux amis\nTous ensemble on rigole\nOn n'est plus des petits\nOn attend la sonnerie\nC'est fini la recré\nTous en rang s'il vous plaît\nOn vas lire et compter\nDessiner et chanter\nOn va bien s'amuser\nViens à l'école avec Tchoupi");
                                        }
                                


                                



                        //#endregion

                        //#region TFQ 



                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}tfq` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}tu fe quoi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}tu fait quoi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}tu fais quoi`

                                        ){

                                                message.channel.send("Je parle avec la personne la plus cool du monde !");
                                                setTimeout(function(){ message.channel.send("Mais elle me repond pas donc je te parle"); }, 4000);
                                                
                                        }
                                



                        //#endregion

                        //#region AGE 
                
                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}t'as quel age` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}ta quel age` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}t'es ne quand` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}he le bot ta quel age` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}t'a quel age`
                                                
                                        ){
                                                message.channel.send("Je suis ne le [  " + client.user.createdAt.getDay() + "  /  " + client.user.createdAt.getMonth() + " / " + client.user.createdAt.getFullYear() + " ] a " + client.user.createdAt.getHours() + " Heures, " + client.user.createdAt.getMinutes() + " Minutes, " + client.user.createdAt.getSeconds() + " Secondes et " + client.user.createdAt.getMilliseconds() + " Millisecondes :D")
                                        }
                                


                        //#endregion

                        //#region SURPREND MOI

                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}surprend moi`||
                                                message.content.toLocaleLowerCase()  === `${prefix}surpren moi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}surprens moi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}surprent moi` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}surprend moi encore` 
                                        ){
                                                GetRandomInt(1, 2)

                                                if(RandomInt == 1){
                                                        message.channel.send("Ok, Les téléphones d'aujourd'hui  ont plus de \npuissance informatique que l'Apollo Guidance \n Controller, L'ordinateur de vol du module lunaire du \n programme d'Appollo 11 ( Celui qui a permis a Neil \n Armstrong de marcher sur la Lune !!")
                                                }

                                                if(RandomInt == 2){
                                                        message.channel.send("Ok, Pour les dauphins et le baleines, pas de grandes \nnuit de sommeil. Quadn c'est l'heure de dormir, \n une seule moitié de leur cerveau se repose à la \n fois. C'est comme ça qu'ils peuvent continuer a \nnager et remonter a la surface pour respirer. Mais \nce n'est pas facile ! Alors, il nagent très \ndoucement, parfois même en rond, pendant tout \nce temps.")
                                                }
                                                
                                        }
                             

                        //#endregion
                                
                        //#region LANCER DE DE 
                          
                                        if (
                                                message.content.toLocaleLowerCase()  === `${prefix}nombre aleatoir` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}lance un de` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}dis encore un nombre au hazard` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}dis moi un nombre aleatoir` ||
                                                message.content.toLocaleLowerCase()  === `${prefix}dis un nombre au hazard`
                                        ){
                                                GetRandomInt(1, 100)

                                        
                                                message.channel.send("Et c'eeeeessssssttttttttt.....")
                                                setTimeout(function(){ message.channel.send(RandomInt); }, 2000);

                                        }


                                       
                        //#endregion

                        //#region REPETE
                                        /*
                                        if (
                                                message.content.toLocaleLowerCase().startsWith(`${prefix}dis `)
                                        ){
                                                
                                                message.delete();
                                                message.channel.send(message.content.substring(4, 10000));
                                        }

                                        if (
                                                message.content.toLocaleLowerCase().startsWith(`${prefix}dit `)
                                        ){
                                                message.delete();
                                                message.channel.send(message.content.substring(4, 10000));
                                        }

                                        if (
                                                message.content.toLocaleLowerCase().startsWith(`${prefix}repete `)
                                        ){
                                                message.delete();
                                                message.channel.send(message.content.substring(7, 10000));
                                        }
                                        */

                                             
                        //#endregion

                                

                                    














	}
};






/*
//#region ADMINISTRATION




        //#region CREATE CHANNEL
                
                client.on('message', message => {

                        if 
                        (
                                message.content.toLocaleLowerCase().startsWith(`${prefix}channel.create`) 
                        ){
                                if 
                                (
                                        message.member.hasPermission('ADMINISTRATOR')
                                ){
                                        message.guild.channels.create(message.content.substring(16, 10000))
                                        message.channel.send("Le salon textuel " + message.content.substring(16, 10000) + " a été crée avec succes !")
                                        console.log(message.author.username + " Vient de créé un channel avec la commande " + message.content)

                                }
                                else
                                {
                                        message.channel.send("Vous n'avez pas la permission de faire ca !")
                                }
                        }
                        
                });
                
        //#endregion

        //#region DELETE CHANNEL
                
        client.on('message', message => {

                if 
                (
                        message.content.toLocaleLowerCase().startsWith(`${prefix}channel.delete`)
                ){
                        if 
                        (
                                message.member.hasPermission('ADMINISTRATOR')
                        ){
                        
                                message.guild.channels.cache.find(r => r.name === message.content.substring(16, 10000)).delete('Deleted by ' + message.author.username)
                                message.channel.send("Le salon textuel " + message.content.substring(16, 10000) + " a été crée avec succes !")
                                console.log(message.author.username + " Vient de supprimer un channel avec la commande " + message.content)
                        }
                        else
                        {
                                message.channel.send("Vous n'avez pas la permission de faire ca !")
                        }
                }
                
        });
        
//#endregion

//#endregion





 */