const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');




module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('[Administration] Provides information about the server.'),
    async execute(interaction) {
        const guild = interaction.guild
        const ServerEmbed = new EmbedBuilder()
            .setTitle(interaction.guild.name)
            .setDescription(`All info about ***${interaction.guild.name}(${interaction.guild.id})***`)
            .setFields(
                {name: `AfkChannel`, value: `${guild.afkChannel}`}
            )
            .setColor("Orange")
        await interaction.reply({content: "One moment", ephemeral: true})
        await interaction.editReply({content: `Succesfully`,embeds:[ServerEmbed], ephemeral: true});
    },
};