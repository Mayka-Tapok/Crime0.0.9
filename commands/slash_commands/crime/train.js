const {EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require("discord.js");
module.exports = (interaction) =>{
    fraction = interaction.options.getRole('fraction')
    union = interaction.options.getRole('union')
    var now = new Date()
    const Embed = new EmbedBuilder()
        .setTitle('Отчет о нападении на поезд')
        .setDescription('Когда вы узнаете результаты, нажмите на кнопку снизу')
        .setColor("DarkButNotBlack")
        .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()})
        .setFooter({iconURL: "https://i.pinimg.com/originals/e1/1f/76/e11f768a24a13a845f723f98e720075e.jpg", text: `${now.toISOString().slice(0,10)}(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`})
        .addFields(
            {name:"Фракция",value: `<@&${fraction.id}>`}
        )

    if(union) Embed.addFields({name: "Союз", value: `<@&${union.id}>`})
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
    const collector =  interaction.channel.createMessageComponentCollector();

    collector.on('collect', async i => {
        if(i.user != interaction.user){
            await i.reply({content: 'Вы не можете нажимать на это', ephemeral: true})
            return
        }
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

        await i.update({embeds:[Embed],content:`***<@${interaction.member.id}> отправил отчет о нападении на поезд***`, components: [row]})
        const NEmbed = new EmbedBuilder()
            .setDescription('***Если вы хотите добавить комментарий к вашему отчету, просто отправьте его дополнительным сообщением***')
        await interaction.followUp({embeds: [NEmbed], ephemeral: true})
    });

    collector.on('end', collected => console.log(`Collected ${collected.size} items`));

}