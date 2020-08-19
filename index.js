//#region DEMARRAGE

                //#region DEMARRAGE
                        require('events').EventEmitter.defaultMaxListeners = 0;
                        const Discord = require('discord.js');
                        const { setMaxListeners } = require('cluster');
                        const { exit } = require('process');
                        const { Server } = require('http');
                        const client = new Discord.Client();
                        client.login('NzM5Nzk0MTc5MDcyMTk2NzA0.XyfpBQ.5HpQqJwZAf1iAtSIFwr7n9sWIVA');

                //#endregion

                //#region CONSOLE.LOG 
                        console.clear();
                        console.log('Lancement du bot....');
                        setTimeout(function(){ console.log('Demarrage du client....               '); },  800);
                        setTimeout(function(){ console.log('Parametrage des listener....          '); }, 1000);
                        setTimeout(function(){ console.log('Importation du module Discordjs....   '); }, 1200);
                        setTimeout(function(){ console.log('Connection du client....              '); }, 1400);
                        setTimeout(function(){ console.log('Parametrage des listener....        \33[92mOK\33[93m'); }, 1600);
                        setTimeout(function(){ console.log('Importation du module Discordjs.... \33[92mOK\33[93m'); }, 1800);
                        setTimeout(function(){ console.log('Connection du client....            \33[92mOK\33[93m'); }, 2000);
                        setTimeout(function(){ console.log('Lancement du bot....                \33[92mOK\33[93m'); }, 2200);
                        setTimeout(function(){ console.log('Client operationnel.                \33[92mOK\33[93m'); }, 2400);
                //#endregion

                //#region BOT READY
                        client.on('ready', () => {
                                client.user.setActivity('Visual Studio Code', { type: 'PLAYING' });
                        });
                //#endregion

//#endregion



       

        
//#region MESSAGE

        //#region MEMBER GET BANNED
                client.on('guildBanAdd', member => {

                        const channel = member.guild.channels.cache.find(ch => ch.name === '『👋』𝗠𝗲𝗺𝗯𝗿𝗲𝘀');
                        channel.send(`${member} vient de se faire bannir <a:xd:744172569481052211>, il y a surement un raison a tout cela !`);
                        
                });
        //#endregion

        //#region MEMBER LEAVE
                client.on('guildMemberRemove', member => {


                        const channel = member.guild.channels.cache.find(ch => ch.name === '『👋』𝗠𝗲𝗺𝗯𝗿𝗲𝘀');
                        channel.send(`${member} a quitté le serveur :sob: tu nous manqueras :cry:`);
                        
                });
        //#endregion 

        //#region NOUVEAU MEMBRE
                client.on('guildMemberAdd', member => {
                        const channel = member.guild.channels.cache.find(ch => ch.name === '『👋』𝗠𝗲𝗺𝗯𝗿𝗲𝘀');
                        channel.send(`<a:dance:744172321723383838> Bonjour, ${member},   <a:dance:744172321723383838> <a:hi:744172079917695012> Bienvenue dans le serveur De Skwal  <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838>`);
                        
                        
                        member.send(`<a:dance:744172321723383838> Bonjour, ${member},   <a:dance:744172321723383838> <a:hi:744172079917695012> Bienvenue dans le serveur De Skwal  <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838> <a:dance:744172321723383838>`);
                });
        
        
        //#endregion  

        //#region BIENVENUE

                client.on('message', message => {

                        if (
                                message.content === '!yo' & !message.author.bot  ||
                                message.content === '!yo le bot'  & !message.author.bot ||
                                message.content === 'et le bot' & !message.author.bot  ||
                                message.content === '!wsh'  & !message.author.bot        ||
                                message.content === '!bonjour' & !message.author.bot  ||
                                message.content === '!et le bot' & !message.author.bot  ||
                                message.content === '!hey'  & !message.author.bot ||
                                message.content === 'LeBotDeSkwal' & !message.author.bot  || 
                                message.content === '!hé, dis' & !message.author.bot  || 
                                message.content === '!hé le bot!' & !message.author.bot  || 
                                message.content === '!wesh' & !message.author.bot || 
                                message.content === '!'  & !message.author.bot || 
                                message.content === 'he le bot' & !message.author.bot  || 
                                message.content === 'yo le bot' & !message.author.bot  || 
                                message.content === '!he le bot' & !message.author.bot 
                         
                        
                        ) {

                                
                                message.channel.send("Ouai mec qu'est ce qu'y a ? Parle moi en commançant tes message par '!'");
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                
                        }

                });

        //#endregion

        //#region INFOS


                client.on('message', message => {

                        if (
                                message.content === '!info' ||
                                message.content === '!help' ||
                                message.content === '!infos' 
                        ){         

                                message.channel.send("Bonjour, \nJe suis un bot, \nOn m'appelle LeBotDeSkwal parce que..... \nBah parce que j'ai été crée par Skwal t'es con ou quoi xD, \nToi, oui toi, tu peut me parler en commançant tes message par un ! \n En attenddant, voici ce que je peux faire : \n!help :          Affiche ce message\n");
                                console.log("Nouveau message '" + message.content + "'");
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                        }
                });

        
        //#endregion

        //#region CA VA 


                client.on('message', message => {

                        if (
                                message.content === '!bien ou bien'             ||
                                message.content === '!ca va'                    ||
                                message.content === '!yo le bot ca va'          ||
                                message.content === 'he le bot comment ca va'   ||
                                message.content === '!he le bot comment ca va'  ||
                                message.content === 'he le bot ca va'           ||
                                message.content === '!cava'                     ||
                                message.content === '!bien ou quoi'             ||
                                message.content === '!commentcavabien'          ||
                                message.content === '!he le bot ca va'          ||
                                message.content === '!yo ca va'                 ||
                                message.content === '!comment tu vas'           ||
                                message.content === '!comment ca va'            ||
                                message.content === '!he le bot comment tu vas'
                                
                        ){

                                GetRandomInt(1, 2)
                                if (RandomInt == 1){
                                                message.channel.send("Ouai, Je Pete La Forme !");
                                                console.log("Nouveau message '" + message.content + "'");
                                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                }

                                if (RandomInt == 2){
                                                message.channel.send("Super, Je Vais Archi Bien !");
                                                console.log("Nouveau message '" + message.content + "'");
                                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                }
                                                
                        }
                });

        //#endregion

        //#region BLAGUE 


                client.on('message', message => {

                        if (
                                message.content === "!raconte moi une blague"           ||
                                message.content === "!raconte une blague"               ||
                                message.content === "!blague"                           || 
                                message.content === "!une blague"                       || 
                                message.content === "!encore une blague"                || 
                                message.content === "!fait moi une blague"              || 
                                message.content === "!fait une blague"                  || 
                                message.content === "!fais une blague"                  || 
                                message.content === "!fais moi une blague"
                        ) {

                                
                                GetRandomInt(1, 17)
                                if (RandomInt == 1){
                                        message.channel.send("Comment un développeur tente-t-il de réparer sa voiture lorsqu'il a un problème ?");
                                        setTimeout(function(){ message.channel.send("Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et essaie de redémarrer."); }, 4000);
                                        
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                        
                                if (RandomInt == 2){
                                        message.channel.send("A quoi sert ineternet explorer ?");
                                        setTimeout(function(){ message.channel.send("A telecharger Google Chrome !"); }, 2000);
                                        
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }

                                if (RandomInt == 3){
                                        message.channel.send("T'as pris quoi comme résolution pour cette nouvelle année ?");
                                        setTimeout(function(){ message.channel.send("1080p."); }, 2000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }

                                if (RandomInt  == 4){
                                        message.channel.send("Les filles, c'est comme les adresses web, ");
                                        setTimeout(function(){ message.channel.send("Elles sont toutes déjà prises"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }

                                if (RandomInt  == 5){
                                        message.channel.send("De quelle couleur sont tes yeux ?");
                                        setTimeout(function(){ message.channel.send("#1292f4 et toi ? :)"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                

                                if (RandomInt  == 6){
                                        message.channel.send("Que fait un geek anglais quand il a faim ?");
                                        setTimeout(function(){ message.channel.send("Il mange du padding."); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 7){
                                        message.channel.send("Que dit un informaticien en colere ?");
                                        setTimeout(function(){ message.channel.send("Fichieeeer"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 8){
                                        message.channel.send("Que Fait un ordinateur sur un bateau ?");
                                        setTimeout(function(){ message.channel.send("Il rame !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 9){
                                        message.channel.send("De nos jours, le zip ça devient rar....");

                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 10){
                                        message.channel.send('Dans le manuel du logiciel il y avait ecrit "Nécessite Windows XP ou mieux"');
                                        setTimeout(function(){ message.channel.send("Donc j'ai installé Linux !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 11){
                                        message.channel.send("A son mariage, un geek accepte les conditions et termes d'utilisation.");
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }

                                if (RandomInt  == 12){
                                        message.channel.send('Quand est ce que Windows ne bug pas ?');
                                        setTimeout(function(){ message.channel.send("Quand l'ordinateur est éteint !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 13){
                                        message.channel.send("Moi j'était un youtubeur qui avait 30  millions d'abonnés j'avais 25 millions de vues par vidéo 10 million de like mais un jour un drame c'est produit : ");
                                        setTimeout(function(){ message.channel.send("Je Me Suis Reveillé !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 14){
                                        message.channel.send("Aujourd'hui,notre vie ne tient souvent plus qu'à un fil.");
                                        setTimeout(function(){ message.channel.send("Celui de notre Chargeur !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 15){
                                        message.channel.send("Que doit on faire  quand un geek pleure ?");
                                        setTimeout(function(){ message.channel.send("Il faut le CONSOLER !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 16){
                                        message.channel.send("Un informaticien ne s'ennuie pas, ");
                                        setTimeout(function(){ message.channel.send("Il se Fichier !"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                
                                if (RandomInt  == 17){
                                        message.channel.send("Un ordinateur c'est comme un Lama, ");
                                        setTimeout(function(){ message.channel.send("Il fait que crasher"); }, 1000);
                                
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                        return;
                                }
                                

                        }
                });


        //#endregion

        //#region PHOTO 


                client.on('message', message => {

                        if (
                                message.content === '!envoie une photo de toi' ||
                                message.content === '!envoi une photo de toi' ||
                                message.content === '!envois une photo de toi' ||
                                message.content === '!envoie moi une photo de toi' 
                        ){

                                message.channel.send("https://zupimages.net/up/20/32/ehyk.png");
                                message.channel.send("Voila ! \nJe suis beau Hein :wink:");
                                console.log("Nouveau message '" + message.content + "'");
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                        }

                });



        //#endregion

        //#region TCHOUPI 


                client.on('message', message => {

                        if (
                                message.content.includes('tchoupi') ||
                                message.content.includes('Tchoupi') ||
                                message.content.includes('!Tchoupi') ||
                                message.content.includes('!tchoupi') 
                        ){

                                message.channel.send("Salut c'est moi Tchoupi\nJe marche vers l'école\nJ'ai de nouveaux amis\nTous ensemble on rigole\nOn n'est plus des petits\nOn attend la sonnerie\nC'est fini la recré\nTous en rang s'il vous plaît\nOn vas lire et compter\nDessiner et chanter\nOn va bien s'amuser\nViens à l'école avec Tchoupi");
                                console.log("Nouveau message '" + message.content + "'");
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                        }
                });


                



        //#endregion

        //#region TFQ 


                client.on('message', message => {

                        if (
                                message.content === '!tfq' ||
                                message.content === '!tu fe quoi' ||
                                message.content === '!tu fait quoi' ||
                                message.content === '!tu fais quoi'

                        ){

                                message.channel.send("Je parle avec la personne la plus cool du monde !");
                                setTimeout(function(){ message.channel.send("Mais elle me repond pas donc je te parle"); }, 4000);
                                console.log("Nouveau message '" + message.content + "'");
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);

                        }
                });



        //#endregion

        //#region AGE 
                client.on('message', message => {
                        if (
                                message.content === "!t'as quel age" ||
                                message.content === "!ta quel age" ||
                                message.content === "!t'es ne quand" ||
                                message.content === "!he le bot ta quel age" ||
                                message.content === "!t'a quel age"
                                
                        ){
                                message.channel.send("Je suis ne le [  " + client.user.createdAt.getDay() + "  /  " + client.user.createdAt.getMonth() + " / " + client.user.createdAt.getFullYear() + " ] a " + client.user.createdAt.getHours() + " Heures, " + client.user.createdAt.getMinutes() + " Minutes, " + client.user.createdAt.getSeconds() + " Secondes et " + client.user.createdAt.getMilliseconds() + " Millisecondes :D")
                                console.log("Nouveau message '" + message.content + "'");
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                        }
                });


        //#endregion

        //#region SURPREND MOI

                client.on('message', message => {
                        if (
                                message.content === "!surprend moi" ||
                                message.content === "!surpren moi" ||
                                message.content === "!surpren moi" ||
                                message.content === "!surprend moi encore" 
                        ){
                                GetRandomInt(1, 2)

                                if(RandomInt == 1){
                                        message.channel.send("Ok, Les téléphones d'aujourd'hui  ont plus de \npuissance informatique que l'Apollo Guidance \n Controller, L'ordinateur de vol du module lunaire du \n programme d'Appollo 11 ( Celui qui a permis a Neil \n Armstrong de marcher sur la Lune !!")
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    OK"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         OK"); }, 800);
                                }

                                if(RandomInt == 2){
                                        message.channel.send("Ok, Pour les dauphins et le baleines, pas de grandes \nnuit de sommeil. Quadn c'est l'heure de dormir, \n une seule moitié de leur cerveau se repose à la \n fois. C'est comme ça qu'ils peuvent continuer a \nnager et remonter a la surface pour respirer. Mais \nce n'est pas facile ! Alors, il nagent très \ndoucement, parfois même en rond, pendant tout \nce temps.")
                                        console.log("Nouveau message '" + message.content + "'");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    OK"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         OK"); }, 800);
                                }
                                
                        }
                });

        //#endregion
                
        //#region LANCER DE DE 
                client.on('message', message => {
                        if (
                                message.content === "!nombre aleatoir" ||
                                message.content === "!lance un de" ||
                                message.content === "!dis encore un nombre au hazard" ||
                                message.content === "!dis moi un nombre aleatoir" ||
                                message.content === "!dis un nombre au hazard" 
                        ){
                                GetRandomInt(1, 100)

                        
                                message.channel.send("Et c'eeeeessssssttttttttt.....")
                                setTimeout(function(){ message.channel.send(RandomInt); }, 2000);

                                console.log("Nouveau message '" + message.content + "'");
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                        }


                })             
        //#endregion

        //#region REPETE
                client.on('message', message => {
                        if (
                                message.content.startsWith('!dis ')
                        ){
                                message.delete();
                                message.channel.send(message.content.substring(4, 10000));
                        }

                        if (
                                message.content.startsWith('!dit ')
                        ){
                                message.delete();
                                message.channel.send(message.content.substring(4, 10000));
                        }

                        if (
                                message.content.startsWith('!repete ')
                        ){
                                message.delete();
                                message.channel.send(message.content.substring(7, 10000));
                        }


                })             
        //#endregion

//#endregion







//#region FUNCTION
                function GetRandomInt(min, max){
    
                                min = Math.ceil(min);
                                max = Math.floor(max);
                                RandomInt =  Math.floor(Math.random() * (max - min +1)) + min;
                        
                }


//#endregion


//#region ADMINISTRATION


        //#region KICK  

                        client.on('message', message => {
                                if (!message.guild) return;
                                if(
                                        message.content.startsWith('!kick ')

                                ){
                                        if 
                                        (
                                                message.member.hasPermission('ADMINISTRATOR') 

                                                
                                        ){
                                                const user = message.mentions.users.first();
                                                if (
                                                        user
                                                ){
                                                        const member = message.guild.member(user);
                                                        if (
                                                                member
                                                        ){
                                        
                                                                member
                                                                        .kick()
                                                                        .then(() => {
                                                                                message.reply(`${user.tag} a été exclu avec succes !`);
                                                                                console.log(`${user.tag} a été exclu du serveur !`)
                                                                        })
                                                                .catch(err => {
                                                                        message.reply("Impossible d'exclure ce membre !");
                                                                        console.error(err);
                                                                });
                                                                } 
                                                                else 
                                                                {
                                                                        message.reply("L'utilisateur n'est pas present dans le serveur !");
                                                                }
                                                                } 
                                                                else 
                                                                {
                                                                        message.reply("Vous n'avez mentionné aucun utilisateur a exclure !");
                                                                }
                                        }
                                        else
                                        {
                                                message.channel.send("Vous n'avez pas la permission de faire ca !")
                                        }
                                }
                                
                                
                                
                        });

                
        //#endregion
 
        //#region BAN  

                client.on('message', message => {
                        if (!message.guild) return;
                        if(
                                message.content.startsWith('!ban ')

                        ){
                                if 
                                (
                                        message.member.hasPermission('ADMINISTRATOR') 

                                        
                                ){
                                        const user = message.mentions.users.first();
                                        if (
                                                user
                                        ){
                                                const member = message.guild.member(user);
                                                if (
                                                        member
                                                ){
                                
                                                        member
                                                                .ban()
                                                                .then(() => {
                                                                        message.reply(`${user.tag} a été banni du serveur avec succes !`);
                                                                        console.log(`${user.tag} a été banni du serveur !`)
                                                                })
                                                        .catch(err => {
                                                                message.reply("Impossible de bannir ce membre !");
                                                                console.error(err);
                                                        });
                                                        } 
                                                        else 
                                                        {
                                                                message.reply("L'utilisateur n'est pas present dans le serveur !");
                                                        }
                                                        } 
                                                        else 
                                                        {
                                                                message.reply("Vous n'avez mentionné aucun utilisateur a bannir !");
                                                        }
                                }
                                else
                                {
                                        message.channel.send("Vous n'avez pas la permission de faire ca !");
                                        return;
                                }
                        }
                        
                        
                        
                });


        //#endregion


        //#region EXIT  
                client.on('message', message => {

                        if (
                                message.author.username == "WcsSkwal"

                                ){


                                        if (
                                                message.content === "!StopServeur" ||
                                                message.content === "!kill.server()" ||
                                                message.content === "!killServer()" ||
                                                message.content === "!exit()" ||
                                                message.content === "exit()" ||
                                                message.content === "kill()" ||
                                                message.content === "kill(0)" ||
                                                message.content === "stop(0)" ||
                                                message.content === "stop(0);" ||
                                                message.content === "kill(1)" ||
                                                message.content === "stop(1)" ||
                                                message.content === "stop(1);" ||
                                                message.content === "kill();" ||
                                                message.content === "stop();" ||
                                                message.content === "stop()" ||
                                                message.content === "!StopServer" 
                
                                        ){
                                                var d = new Date();
                                                var h = d.getHours();
                                                var m = d.getMinutes();
                                                var s = d.getSeconds();
                                                var ms = d.getMilliseconds();

                                                message.channel.send("Successfully stopped server at " + h + " Hours, " + m + " Minutes, " + s + " Secondes and " + ms + " Millisecondes !");
                                                console.log("\33[94mSuccessfullys stoped server at\33[92m " + h + " Hours " + m + " Minutes " + s + " Secondes " + ms + " Millisecondes !");
                                                setTimeout(function(){ exit(0) }, 1000);

                
                                        }
                                
                        }
                });


        //#endregion 


//#endregion


//#region DETECTION MESSAGE
        client.on('message', message => {

                if(!message.author.bot & message.content.startsWith('!')){
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

                                message.channel.send("Hé euuuuu pourquoi tu m'insulte sniffff snifff :cry:");
                        
                        }

                        
                        if (message.content ==='!encore'
                        ){
                                message.channel.send("@" + message.author.username + " Encore Quoi ?");
                    
                        }
                }
                
                
        });

//#endregion


//#region TEST
        client.on('message', message => {
                if (message.content === '!ping') {
                        var server = message.guild;
                        
                        client.user.fetch('672823761723981889')
                            .then(user => {
                                        user.send("Bonjour a tous, Je m'appelle LeBotDeSkwal posez moi des question en commancant vos messages par '!'");
                        })

                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });


//#endregion


 