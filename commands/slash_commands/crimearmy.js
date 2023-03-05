//Я доделаю это потом

const {SlashCommandBuilder, SlashCommandSubcommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('crime')
        .setDescription('D')
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('army')
                .setDescription('[Crime] Отпись о нападении на поставку army')
                .addAttachmentOption(option =>
                option
                    .setName('proofs')
                    .setDescription("Сюда крепите скрин оповещения о поставке(который в чате)")
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

        ),
    async execute(interaction) {
        if(interaction.member.roles.cache.has("1081562684681621545") || interaction.member.roles.cache.has("1081562556814065824") || interaction.member.roles.cache.has("1081562608471126056") || interaction.member.roles.cache.has("1081562636317110302") || interaction.member.roles.cache.has("1081562660421779526")){
        if(interaction.options.getSubcommand() === 'army' || interaction.options.getSubcommand() === 'ems'){
            require('./crime/army.ems')(interaction);
        }
        else if(interaction.options.getSubcommand() === 'fz' || interaction.options.getSubcommand() === 'fp'){
            require('./crime/fpfz')(interaction)
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