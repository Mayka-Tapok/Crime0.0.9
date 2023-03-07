const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
module.exports = (interaction) => {
    const wbtn = new ButtonBuilder()
        .setCustomId('_winbtn')
        .setLabel('✅ Win')
        .setStyle("Primary")
    const lbtn = new ButtonBuilder()
        .setCustomId('_losebtn')
        .setLabel('❌ Lose')
        .setStyle("Danger")
    const row = new ActionRowBuilder()
        .addComponents(
            wbtn,
            lbtn
            );


    const union = interaction.options.getRole('union')
    const comment = interaction.options.getString('comment')
    const fraction = interaction.options.getRole('fraction')
    const proofs = interaction.options.getAttachment('proofs')

    const Embed = new EmbedBuilder()
        .setTitle(`Отчет о нападении на поставку ${interaction.options.getSubcommand().toUpperCase()}`)
        .addFields({name:"Фракция",value: `<@&${fraction.id}>`, inline: true})
    if(union){
        Embed.addFields({name:"Союзник",value:`<@&${union.id}>`, inline: true})
    }
    if(comment){
        Embed.addFields({name:'Комментарий',value: comment})
    }
    Embed.setImage(proofs.url)

    interaction.reply({embeds:[Embed],content:`***<@${interaction.member.id}> отправил отчет о нападении на поставку ${interaction.options.getSubcommand().toUpperCase()}***`, components: [row]})


    const collector =  interaction.channel.createMessageComponentCollector();

    collector.on('collect', async i => {
        if(i.customId === '_winbtn') {
            Embed
                .addFields({name: 'Результат', value: "Win"})
                .setColor("Green")
            wbtn.setDisabled(true)
            row.setComponents(wbtn)
        }
        else if(i.customId === '_losebtn'){
            Embed
                .addFields({name: 'Результат', value: "Lose"})
                .setColor("Red")
            lbtn.setDisabled(true)
            row.setComponents(lbtn)
        }

        await i.update({embeds:[Embed],content:`***<@${interaction.member.id}> отправил отчет о нападении на поставку ${interaction.options.getSubcommand().toUpperCase()}***`, components: [row]})
        const NEmbed = new EmbedBuilder()
            .setDescription('***Если вы хотите добавить комментарий к вашему отчету, просто отправьте его дополнительным сообщением***')
        await interaction.followUp({embeds: [NEmbed], ephemeral: true})
    });

    collector.on('end', collected => console.log(`Collected ${collected.size} items`));

}