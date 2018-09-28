//Assets
const config = require('./config.json');
const clear = require('clear');
const chalk = require('chalk');

//start discord
const Discord = require('discord.js');
const client = new Discord.Client();
const token = config.discord.token;

client.on('ready', () => {

//Title when Started
console.log(`
${chalk.grey('--------------------------------------------------')}
${chalk.blue('Discord ') + chalk.green(' Loaded, Loading StreamLABS ') + chalk.blue('API')}
${chalk.grey('--------------------------------------------------')}
`);

	//Connection
	let io = require('socket.io-client');
        let streamlabs = io(`https://sockets.streamlabs.com?token=${config.streamlabs}`);
        let channel = dclient.channels.get(config.textchannel);
        if (!channel) return;


	//Events Announced HERE
        streamlabs.on('event', async data => {
	    //StreamLABs Donation Annouce HERE with Twitch Announce
            if (!data.for || data.for === 'streamlabs' && data.type === 'donation') {

                if (!data === undefined || !data) return;

                let message = `Thank you, **${data.message[0].name}** for donating **${data.message[0].formatted_amount}**\n\n\`${data.message[0].message}\``;
                if (!message) message = `Thank you, **${data.message[0].name}** for donating **${data.message[0].formatted_amount}**`;
		client.user.setActivity(`${data.message[0].name} just Donated ${data.message[0].formatted_amount}`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[Twitch ALERT]")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2000px-Twitch_logo.svg.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            } else if (!data.for || data.for === 'twitch_account' && data.type === 'follow') {
                if (!data === undefined || !data) return;
                console.log("You just got Follow on Twitch");
                let message = `Thank you, **${data.message[0].name}** for Follow`;
                if (!message) message = `Thank you, **${data.message[0].name}** for Follow`;
		client.user.setActivity(`${data.message[0].name} just Followed on Twitch`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[Twitch ALERT]")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2000px-Twitch_logo.svg.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            } else if (!data.for || data.for === 'twitch_account' && data.type === 'bits') {
                if (!data === undefined || !data) return;
                console.log("You just got Bits on Twitch");
                let message = `Thank you, **${data.message[0].name}** for **${data.message[0].amount}** Bits`;
                if (!message) message = `Thank you, **${data.message[0].name}** for **${data.message[0].amount}** Bits`;
		client.user.setActivity(`${data.message[0].name} just Bit ${data.message[0].amount} on Twitch`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[Twitch ALERT]")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2000px-Twitch_logo.svg.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            } else if (!data.for || data.for === 'twitch_account' && data.type === 'subscription') {
                if (!data === undefined || !data) return;
                //most_recent_subscriber
                console.log("You just got Subscribe on Twitch");
                let message = `Thank you, **${data.message[0].name}** for Twitch Subscribe **${data.message[0].months}** Month`;
                if (!message) message = `Thank you, **${data.message[0].name}** for Twitch Subscribe **${data.message[0].months}** Month`;
		client.user.setActivity(`${data.message[0].name} just Subbed ${data.message[0].months}Months on Twitch`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[Twitch ALERT]")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2000px-Twitch_logo.svg.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            } else if (!data.for || data.for === 'twitch_account' && data.type === 'host') {
                //console.log(data)
                console.log("You just got Host on Twitch");
                if (!data === undefined || !data) return;

                let message = `Thank you, **${data.message[0].name}** for Host **${data.message[0].viewers}** Viewers`;
                if (!message) message = `Thank you, **${data.message[0].name}** for Host **${data.message[0].viewers}** Viewers`;
		client.user.setActivity(`${data.message[0].name} just Hosted ${data.message[0].viewers}Viewers on Twitch`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[Twitch ALERT]")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2000px-Twitch_logo.svg.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            }

            //YouTube Annouce HERE
		
            if (!data.for || data.for === 'youtube_account' && data.type === 'superchat') {

                if (!data === undefined || !data) return;
                //console.log(data);
                console.log("You just got SuperChat on YouTube");
                let message = `Thank you, **${data.message[0].name}** for **${data.message[0].displayString}** Superchat on Youtube\n\n\`${data.message[0].comment}\``;
                if (!message) message = `Thank you, **${data.message[0].name}** for **${data.message[0].displayString}** Superchat on Youtube`;
		client.user.setActivity(`${data.message[0].name} just Superchat ${data.message[0].displayString} on YouTube`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[YouTube ALERT]")
                    .setThumbnail("https://cdn.downdetector.com/static/uploads/c/300/2f211/youtubelogo.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            } else if (!data.for || data.for === 'youtube_account' && data.type === 'follow') {
                if (!data === undefined || !data) return;
                //console.log(data);
                console.log("You just got Sbscribe on YouTube");
                let message = `Thank you, **${data.message[0].name}** for Subscribe on Youtube`;
                if (!message) message = `Thank you, **${data.message[0].name}** for Subscribe on Youtube`;
		client.user.setActivity(`${data.message[0].name} just Subscribe on YouTube`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[YouTube ALERT]")
                    .setThumbnail("https://cdn.downdetector.com/static/uploads/c/300/2f211/youtubelogo.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            } else if (!data.for || data.for === 'youtube_account' && data.type === 'subscription') {
                if (!data === undefined || !data) return;
                //console.log(data);
                console.log("You just got Sponsor on YouTube");
                let message = `Thank you, **${data.message[0].name}** for **${data.message[0].months}** Month Sponsor on Youtube\n\n\`${data.message[0].message}\``;
                if (!message) message = `Thank you, **${data.message[0].name}** for **${data.message[0].months}** Month Sponsor on Youtube`;
		client.user.setActivity(`${data.message[0].name} just Sponsor ${data.message[0].months}Months on YouTube`, { type: "WATCHING"})
                let embed = new Discord.RichEmbed()
                    .setTitle("[YouTube ALERT]")
                    .setThumbnail("https://cdn.downdetector.com/static/uploads/c/300/2f211/youtubelogo.png")
                    .setDescription(message)
                    .setColor('GREEN')
                    .setTimestamp()
                channel.send(embed)

            }

	    //Mixer Annouce HERE (Coming SOON!)

        });

    });
client.login(token);