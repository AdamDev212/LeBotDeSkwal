//#region DEMARRAGE
var enable = 1;
                //#region DEMARRAGE
                        require('events').EventEmitter.defaultMaxListeners = 0;
                        const Discord = require('discord.js');
                        const { setMaxListeners } = require('cluster');
                        const { exit } = require('process');
                        const { Server } = require('http');
                        const client = new Discord.Client();
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

        //#region NOUVEAU MEMBRE
        client.on('guildMemberAdd', member => {
                const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
                if (!channel) return;
                        channel.send(`attention, un ${member} sauvage apparait !!`);
                        console.log('Nouvel utilisateur detecte....');
                        setTimeout(function(){ console.log('Envoie du message de bienvenue....'); }, 500);
                        setTimeout(function(){ console.log('Envoie du message de bienvenue.... \33[92mOK\33[93m'); }, 1000);
        });
        
//#endregion  

//#region BIENVENUE

        client.on('message', message => {

                if (
                message.content === '!yo' ||
                message.content === '!yo le bot' ||
                message.content === 'et le bot' ||
                message.content === '!wsh'        ||
                message.content === '!bonjour' ||
                message.content === '!et le bot' ||
                message.content === '!hey' ||
                message.content === 'LeBotDeSkwal' || 
                message.content === '!hé, dis' || 
                message.content === '!hé le bot!' || 
                message.content === '!wesh'|| 
                message.content === '!' || 
                message.content === 'he le bot' || 
                message.content === 'yo le bot' || 
                message.content === '!he le bot' 

                ) {

                        if (message.author.bot) return;
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

                        message.channel.send("Bonjour, \nJe suis un bot, \nOn m'appelle LeBotDeSkwal parce que..... \nBah parce que j'ai été crée par Skwal t'es con ou quoi xD, \nToi, oui toi, tu peut me parler en commançant tes message par un ! \n ");
                        console.log("Nouveau message '!infos' ");  
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
                        
                        ) {

                                GetRandomInt(1, 2)
                                if (RandomInt == 1){
                                        message.channel.send("Ouai, Je Pete La Forme !");
                                        console.log("Nouveau message '!comment tu vas' ");
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                }

                                if (RandomInt == 2){
                                        message.channel.send("Super, Je Vais Archi Bien !");
                                        console.log("Nouveau message '!comment tu vas' ");
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
                                
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                     
                        if (RandomInt == 2){
                                message.channel.send("A quoi sert ineternet explorer ?");
                                setTimeout(function(){ message.channel.send("A telecharger Google Chrome !"); }, 2000);
                                
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }

                        if (RandomInt == 3){
                                message.channel.send("T'as pris quoi comme résolution pour cette nouvelle année ?");
                                setTimeout(function(){ message.channel.send("1080p."); }, 2000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }

                        if (RandomInt  == 4){
                                message.channel.send("Les filles, c'est comme les adresses web, ");
                                setTimeout(function(){ message.channel.send("Elles sont toutes déjà prises"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }

                        if (RandomInt  == 5){
                                message.channel.send("De quelle couleur sont tes yeux ?");
                                setTimeout(function(){ message.channel.send("#1292f4 et toi ? :)"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        

                        if (RandomInt  == 6){
                                message.channel.send("Que fait un geek anglais quand il a faim ?");
                                setTimeout(function(){ message.channel.send("Il mange du padding."); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 7){
                                message.channel.send("Que dit un informaticien en colere ?");
                                setTimeout(function(){ message.channel.send("Fichieeeer"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 8){
                                message.channel.send("Que Fait un ordinateur sur un bateau ?");
                                setTimeout(function(){ message.channel.send("Il rame !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 9){
                                message.channel.send("De nos jours, le zip ça devient rar....");

                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 10){
                                message.channel.send('Dans le manuel du logiciel il y avait ecrit "Nécessite Windows XP ou mieux"');
                                setTimeout(function(){ message.channel.send("Donc j'ai installé Linux !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 11){
                                message.channel.send("A son mariage, un geek accepte les conditions et termes d'utilisation.");
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }

                        if (RandomInt  == 12){
                                message.channel.send('Quand est ce que Windows ne bug pas ?');
                                setTimeout(function(){ message.channel.send("Quand l'ordinateur est éteint !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 13){
                                message.channel.send("Moi j'était un youtubeur qui avait 30  millions d'abonnés j'avais 25 millions de vues par vidéo 10 million de like mais un jour un drame c'est produit : ");
                                setTimeout(function(){ message.channel.send("Je Me Suis Reveillé !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 14){
                                message.channel.send("Aujourd'hui,notre vie ne tient souvent plus qu'à un fil.");
                                setTimeout(function(){ message.channel.send("Celui de notre Chargeur !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 15){
                                message.channel.send("Que doit on faire  quand un geek pleure ?");
                                setTimeout(function(){ message.channel.send("Il faut le CONSOLER !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 16){
                                message.channel.send("Un informaticien ne s'ennuie pas, ");
                                setTimeout(function(){ message.channel.send("Il se Fichier !"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....      "); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....           "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                                return;
                        }
                        
                        if (RandomInt  == 17){
                                message.channel.send("Un ordinateur c'est comme un Lama, ");
                                setTimeout(function(){ message.channel.send("Il fait que crasher"); }, 1000);
                            
                                console.log("Nouveau message " + message.content);
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

                if (message.content === '!envoie une photo de toi') {

                        message.channel.send("https://zupimages.net/up/20/32/ehyk.png");
                        message.channel.send("Voila ! \nJe suis beau Hein :wink:");
                        console.log("Nouveau message '!envoie une photo de toi' ");
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });

        client.on('message', message => {
                if (message.content === '!envoie moi une photo de toi') {

                        message.channel.send("https://zupimages.net/up/20/32/ehyk.png");
                        message.channel.send("Voila ! \nJe suis beau Hein :wink:");
                        console.log("Nouveau message '!envoie moi une photo de toi' ");
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });

        client.on('message', message => {

                if (message.content === '!envoi une photo de toi') {

                        message.channel.send("https://zupimages.net/up/20/32/ehyk.png");
                        message.channel.send("Voila ! \nJe suis beau Hein :wink:");
                        console.log("Nouveau message '!envoi une photo de toi' ");
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });


        client.on('message', message => {

                if (message.content === '!envois une photo de toi') {

                        message.channel.send("https://zupimages.net/up/20/32/ehyk.png");
                        message.channel.send("Voila ! \nJe suis beau Hein :wink:");
                        console.log("Nouveau message '!envois une photo de toi' ");
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });



//#endregion

//#region TCHOUPI 


        client.on('message', message => {

                if (message.content === 'tchoupi') {

                        message.channel.send("Salut c'est moi Tchoupi\nJe marche vers l'école\nJ'ai de nouveaux amis\nTous ensemble on rigole\nOn n'est plus des petits\nOn attend la sonnerie\nC'est fini la recré\nTous en rang s'il vous plaît\nOn vas lire et compter\nDessiner et chanter\nOn va bien s'amuser\nViens à l'école avec Tchoupi");
                        console.log("Nouveau message 'tchoupi' ");
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });


        client.on('message', message => {

                if (message.content === 'Tchoupi') {

                    message.channel.send("Salut c'est moi Tchoupi\nJe marche vers l'école\nJ'ai de nouveaux amis\nTous ensemble on rigole\nOn n'est plus des petits\nOn attend la sonnerie\nC'est fini la recré\nTous en rang s'il vous plaît\nOn vas lire et compter\nDessiner et chanter\nOn va bien s'amuser\nViens à l'école avec Tchoupi");
                    console.log("Nouveau message 'Tchoupi' ");
                    setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                        setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                        setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                }
        });


            client.on('message', message => {

                    if (message.content === '!tchoupi') {

                            message.channel.send("Salut c'est moi Tchoupi\nJe marche vers l'école\nJ'ai de nouveaux amis\nTous ensemble on rigole\nOn n'est plus des petits\nOn attend la sonnerie\nC'est fini la recré\nTous en rang s'il vous plaît\nOn vas lire et compter\nDessiner et chanter\nOn va bien s'amuser\nViens à l'école avec Tchoupi");
                            console.log("Nouveau message '!tchoupi' ");
                            setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                            setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                            setTimeout(function(){ console.log("Preparation de la reponse automatisée....    \33[92mOK\33[93m"); }, 600);
                            setTimeout(function(){ console.log("Envoie de la reponse automatisée....         \33[92mOK\33[93m"); }, 800);
                        }
            });


        client.on('message', message => {

                if (message.content === '!Tchoupi') {

                        message.channel.send("Salut c'est moi Tchoupi\nJe marche vers l'école\nJ'ai de nouveaux amis\nTous ensemble on rigole\nOn n'est plus des petits\nOn attend la sonnerie\nC'est fini la recré\nTous en rang s'il vous plaît\nOn vas lire et compter\nDessiner et chanter\nOn va bien s'amuser\nViens à l'école avec Tchoupi");
                        console.log("Nouveau message '!Tchoupi' ");
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
                        console.log("Nouveau message '!tfq' ");
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
                        console.log("Nouveau message " + message.content );
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
                                console.log("Nouveau message " + message.content );
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée...."); }, 200);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....    "); }, 400);
                                setTimeout(function(){ console.log("Preparation de la reponse automatisée....    OK"); }, 600);
                                setTimeout(function(){ console.log("Envoie de la reponse automatisée....         OK"); }, 800);
                        }

                        if(RandomInt == 2){
                                message.channel.send("Ok, Pour les dauphins et le baleines, pas de grandes \nnuit de sommeil. Quadn c'est l'heure de dormir, \n une seule moitié de leur cerveau se repose à la \n fois. C'est comme ça qu'ils peuvent continuer a \nnager et remonter a la surface pour respirer. Mais \nce n'est pas facile ! Alors, il nagent très \ndoucement, parfois même en rond, pendant tout \nce temps.")
                                console.log("Nouveau message " + message.content );
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

                                console.log("Nouveau message " + message.content );
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


//#region CREATE CHANNEL

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

                if(!message.author.bot & message.content.includes('!')){
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

                        if (message.content.includes('vite'))  {
                                message.channel.send(message.author.username + " tu vas fermer ta gueule je suis pas ton chien !");
                    
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


//#region CILENT TOKEN 
        client.login(" Bot's Token ");
//#endregion
 