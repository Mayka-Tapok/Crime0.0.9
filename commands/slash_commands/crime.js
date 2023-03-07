const {SlashCommandBuilder, SlashCommandSubcommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('crime')
        .setDescription('crime main command')
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('ems')
                .setDescription('[Crime] Отпись о нападении на поставку EMS')
                .addAttachmentOption(option =>
                    option
                        .setName('proofs')
                        .setDescription("Сюда крепите скрин скаута ЕМС машин(можете прикрепить откат в комментарий)")
                        .setRequired(true)
                )
                .addRoleOption(option =>
                    option
                        .setName('fraction')
                        .setDescription('Укажите вашу фракцию')
                        .setRequired(true)
                )
                .addRoleOption(option =>
                    option
                        .setName('union')
                        .setDescription('Сюда вписываете фракцию, которая нападет вместе с вами(если таковая есть)')
                )
                .addStringOption(option =>
                    option
                        .setName('comment')
                        .setDescription('Комменатрий [Необязательно]')
                )

        )
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('fp')
                .setDescription('[Crime] Отпись о нападении на Федеральную тюрьму')
                .addRoleOption(option =>
                    option
                        .setName('fraction')
                        .setDescription('Укажите вашу фракцию')
                        .setRequired(true)
                )
                .addRoleOption(option =>
                    option
                        .setName('union')
                        .setDescription('Сюда вписываете фракцию, которая нападет вместе с вами(если таковая есть)')
                )

        )
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('fz')
                .setDescription('[Crime] Отпись о нападении на Форт Занкудо')
                .addRoleOption(option =>
                    option
                        .setName('fraction')
                        .setDescription('Укажите вашу фракцию')
                        .setRequired(true)
                )
                .addRoleOption(option =>
                    option
                        .setName('union')
                        .setDescription('Сюда вписываете фракцию, которая нападет вместе с вами(если таковая есть)')
                )
        )
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
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
                .addAttachmentOption(option =>
                    option
                        .setName("image")
                        .setDescription('Док-ва сдачи ГШ(видно худ, дату и время')


                )
        )
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName("analgetic")
                .setDescription("[Crime] Оставьте отчет о заказе поставки анальгетика(SPANK)")
                .addRoleOption(option =>
                    option
                        .setName('fraction')
                        .setDescription('Фракция, которая заказала поставку')
                        .setRequired(true)
                )
                .addRoleOption(option =>
                    option
                        .setName('union')
                        .setDescription('Союзная фракция(если есть)')
                        .setRequired(false)
                )
        )
        .addSubcommand(
        new SlashCommandSubcommandBuilder()
            .setName("train")
            .setDescription("[Crime] Оставьте отчет о нападении на поезд")
            .addRoleOption(option =>
                option
                    .setName('fraction')
                    .setDescription('Фракция, которая взяла контракт')
                    .setRequired(true)
            )
            .addRoleOption(option =>
                option
                    .setName('union')
                    .setDescription('Союзная фракция(если есть)')
                    .setRequired(false)
            )
    ),

    async execute(interaction) {
        if(interaction.member.roles.cache.has("1081562684681621545") || interaction.member.roles.cache.has("1081562556814065824") || interaction.member.roles.cache.has("1081562608471126056") || interaction.member.roles.cache.has("1081562636317110302") || interaction.member.roles.cache.has("1081562660421779526")){
            switch(interaction.options.getSubcommand()) {
                case('army' || 'ems'):
                    require('./crime/army.ems')(interaction);
                    return;
                case('fz' || 'fp'):
                    require('./crime/fpfz')(interaction)
                    return;
                case('gunshop'):
                    require('./crime/gunshop')(interaction)
                    return;
                case('analgetic'):
                    require('./crime/analgetic')(interaction)
                    return;
                case('train'):
                    require('./crime/train')(interaction)
            }

        }else{
            const Embed = new EmbedBuilder()
                .setTitle('Permissions Error')
                .setDescription(`You cant use this command`)
                .addFields({name: "Error", value: `**This commands for: <@&1081562684681621545>,<@&1081562556814065824>,<@&1081562608471126056>,<@&1081562636317110302>,<@&1081562660421779526>**`})
                .setColor("DarkRed")

            await interaction.reply({embeds: [Embed], ephemeral: true, content: `<@${interaction.member.id}>`})
        }


    }
}