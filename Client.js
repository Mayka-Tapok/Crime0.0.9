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