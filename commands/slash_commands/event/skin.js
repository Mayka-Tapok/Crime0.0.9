const {EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require("discord.js");

module.exports = (interaction) => {
    const ID = interaction.options.getInteger('ид')
    const URL = interaction.options.getString('ссылка')
    const skin = interaction.options.getString('скин')

    const wbtn = new ButtonBuilder()
        .setCustomId('_winbtn')
        .setLabel('Подтвердить')
        .setEmoji("1082655183202431048")
        .setStyle("Success")
    const row = new ActionRowBuilder()
        .addComponents(
            wbtn,
        );
    const Embed = new EmbedBuilder()
        .setTitle("Запрос авто для проведения мероприятия")
        .setDescription("Администрация обязуется отреагрировать на запрос и выдать авто")
        .addFields(
            {name: "ID игрока", value:`${ID}`},
            {name: "Машины", value: `${skin}`},)
    if (URL.includes('http')) {
        Embed.setURL(`${URL}`)
    } else {
        interaction.reply({content: 'Вы должны прикрепить ссылку на откат', ephemeral: true})
        return;
    }
    interaction.reply({content: `<@&1082620880619831327>, запрос на выдачу Т/С`,embeds: [Embed], components: [row]})
    const collector = interaction.channel.createMessageComponentCollector();

    collector.on('collect', async i => {
        if (!i.member.roles.cache.has("1082620880619831327")) {
            i.reply({content: 'Вы не можете нажимать на это!', ephemeral: true})
            return;
        }
        if (i.customId === '_winbtn') {
            Embed
                .addFields({name: 'Подтверждено', value: `Администратором <@${i.member.id}>`})
                .setColor("Green")
            wbtn.setDisabled(true)
            row.setComponents(wbtn)
        }
        i.update({embeds: [Embed], component: [row]})
    })
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}