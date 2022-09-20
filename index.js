const { Client, GatewayIntentBits , Collection } = require('discord.js');
const { bot_token, mongo_url } = require('./config.example.json');
const { readdirSync } = require('fs');

const mongoose = require('mongoose');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.commands = new Collection(readdirSync("./commands").map(cmd => (cmd = require(`./commands/${cmd}`), [cmd.data.name, cmd])))
for (const event of readdirSync("./events")) client.on(event.split(".")[0], require(`./events/${event}`).bind(null))

client.login(bot_token).then(() => {
    mongoose.connect(mongo_url).then(() => console.log("[!] Connected to MongoDB"))
});

