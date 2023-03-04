const {EmbedBuilder} = require("discord.js");
module.exports = (client, cmd, cmdFiles) => {
    client
        .on('ready', () => {
            console.log(`Login as ${client.user.username}`)
        })
    require('./messageCreate')(client, cmdFiles);
    require('./onInteractionCreate')(client, cmd);

}