const {EmbedBuilder} = require("discord.js");
module.exports = (interaction) => {
    const frac = interaction.options.getRole('fraction')
    const union = interaction.options.getRole('union')
    if(interaction.options.getSubcommand() === 'fz') var place = 'Форт Занкудо'
    else if(interaction.options.getSubcommand() === 'fp') var place = 'Федеральную Тюрьму'
    const Embed = new EmbedBuilder()
        .setTitle(`Отчет о нападении на ${place}`)
        .addFields(
            {name: "Фракция",value: `<@&${frac.id}>`, inline: true},
        )
    var now = new Date()

        Embed.setFooter({iconURL: "https://i.pinimg.com/originals/e1/1f/76/e11f768a24a13a845f723f98e720075e.jpg", text: `Date: ${now.toISOString().slice(0,10)}(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`,proxyIconURL:"https://i.pinimg.com/originals/e1/1f/76/e11f768a24a13a845f723f98e720075e.jpg" })
        .setAuthor({name: `${interaction.client.user.username}`, iconURL: interaction.member.avatarURL()})
    if(union) {
        Embed.addFields({name: "Союзная фракция", value: `${union}`, inline: true})
    }

    interaction.reply({embeds:[Embed], content: interaction.member.mentionable})
}