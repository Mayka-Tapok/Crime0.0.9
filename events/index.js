const {EmbedBuilder} = require("discord.js");
module.exports = (client) => {
    client
        .on('ready', () => {
            console.log(`Login as ${client.user.username}`)
        })
    require('./messageCreate')(client)

}