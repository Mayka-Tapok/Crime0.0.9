const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');




module.exports = {
    data: new SlashCommandBuilder()
        .setName('gunshop')
        .setDescription('[Crime] Отчет о сдаче ГШ')
        .addStringOption(option =>
            option
                .setName('fraction')
                .setDescription('Фракция которая брала ГШ')
                .setAutocomplete(false)
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('time-take')
                .setDescription('время взятия ГШ')
                .setAutocomplete(false)
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('time-give')
                .setDescription('Время сдачи ГШ')
                .setAutocomplete(false)
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('video-link')
                .setDescription('Ссылка на откат всего ГШ')
                .setAutocomplete(false)
                .setRequired(true)
        )

        .addBooleanOption(option =>
            option
                .setName('win')
                .setDescription('Выиграли или нет')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('comment')
                .setDescription('Оставьте свой коментарий(если его нет,можете не заполнять')
                .setAutocomplete(false)
        )
        .addAttachmentOption(option =>
            option
                .setName("image")
                .setDescription('Док-ва сдачи ГШ(видно худ, дату и время')


        ),
    async execute(interaction) {

        const Fraction = interaction.options.getString('fraction');
        const comment = interaction.options.getString('comment');
        const TT = interaction.options.getString('time-take');
        const TG = interaction.options.getString('time-give');
        const VL = interaction.options.getString('video-link');
        const result = interaction.options.getBoolean('win')
        if (result) {
            var res = 'Win'
            var color = "Green"
        } else {
            var res = 'Lose'
            var color = "Red"
        }

        const image = interaction.options.getAttachment('image');
        const Embed = new EmbedBuilder()
            .setTitle(`Отчет о взятии ГШ фракцией ${Fraction}`)
            if(image) Embed.setImage(image.url)
            .addFields(
                {name: `Время взятия/сдачи контракта:`, value: `${TT}/${TG}`, inline: true},
                {name: "Результат:", value: `${res}`,inline: true})
            if(comment) Embed.addFields({name: "Коментарий:", value: `${comment}`},)
            .setColor(`${color}`)
        if(VL.includes('http')){
            Embed.setURL(`${VL}`)
        }else {
            interaction.reply({content: 'Вы должны прикрепить ссылку на откат', ephemeral: true})
            return;
        }
        await interaction.reply({embeds: [Embed]})
    },
};