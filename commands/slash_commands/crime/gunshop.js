const {EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require('discord.js');

module.exports = (interaction) => {

    const Fraction = interaction.options.getString('fraction');
    const TT = interaction.options.getString('time-take');
    const TG = interaction.options.getString('time-give');
    const VL = interaction.options.getString('video-link');
    const image = interaction.options.getAttachment('image');
    const Embed = new EmbedBuilder()
        .setTitle(`Отчет о взятии ГШ фракцией ${Fraction}`)
    if (image) {
        Embed.setImage(image.url)
    }
    Embed.addFields(
        {name: `Время взятия/сдачи контракта:`, value: `${TT}/${TG}`, inline: true})

    if (VL.includes('http')) {
        Embed.setURL(`${VL}`)
    } else {
        interaction.reply({content: 'Вы должны прикрепить ссылку на откат', ephemeral: true})
        return;
    }
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
    interaction.reply({embeds: [Embed], components: [row]})

    const collector = interaction.channel.createMessageComponentCollector();

    collector.on('collect', async i => {
        if (i.user != interaction.user) {
            interaction.followUp({content: 'Вы не можете нажимать на это!', ephemeral: true})
            return;
        }
        if (i.customId === '_winbtn') {

            Embed
                .addFields({name: 'Результат', value: "Win"})
                .setColor("Green")
            wbtn.setDisabled(true)
            row.setComponents(wbtn)
        } else if (i.customId === '_losebtn') {
            Embed
                .addFields({name: 'Результат', value: "Lose"})
                .setColor("Red")
            lbtn.setDisabled(true)
            row.setComponents(lbtn)
        }


        interaction.update({embeds: [Embed], component: [row]})
    })
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}