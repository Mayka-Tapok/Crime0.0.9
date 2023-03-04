{/*
        UPDATE 0.0.3
                Архитектура, свзь команд и ивентов
                Архитектура, свзь команд и ивентов

*/}
const API = require('discord.js')
const {Client, GatewayIntentBits, Collection} = require('discord.js')

const {token} = require('./config.json')

const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
]})

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands/slash_commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
        } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
}


require('./events')(client, client.commands, commandFiles)
client.login(token)
