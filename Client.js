{/*
        UPDATE 0.0.3
                Архитектура, свзь команд и ивентов
                Архитектура, свзь команд и ивентов

*/}

const API = require('discord.js')
const {Client, GatewayIntentBits} = require('discord.js')
const {prefix, token} = require('./config.json')
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
]})
require('./events')(client)
client.login(token)
