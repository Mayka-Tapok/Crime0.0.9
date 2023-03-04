const {EmbedBuilder} = require("discord.js");
module.exports = (client, cmd, cmdFiles) => {
    require('./ready')(client)
    require('./messageCreate')(client, cmdFiles);
    require('./onInteractionCreate')(client, cmd);

}