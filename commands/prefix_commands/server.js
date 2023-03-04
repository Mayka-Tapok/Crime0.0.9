const {EmbedBuilder} = require("discord.js");
const data = {
    name: "help",
    description: "none"
}
module.exports = (guild, message) => {
    const ServerEmbed = new EmbedBuilder()
        .setTitle('Server info')
        .setColor("DarkAqua")
        .addFields({name: "Name of guild", value: guild.name})
        .addFields({name: "ID of guild", value: guild.id})
        .addFields({name: "ID of guild", value: `<@${guild.ownerId}>`})
        if(guild.afkChannelId != null){ServerEmbed.addFields({name: "afkChannel of guild", value: `<#${guild.afkChannelId}>`})}

        message.reply({embeds: [ServerEmbed]})

}