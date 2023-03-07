const {SlashCommandBuilder, SlashCommandSubcommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('event')
        .setDescription('event main command')
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('vehicle')
                .setDescription('[Events] запрос на выдачу Т/С для мероприятия(от администрации)')
                .addStringOption(option =>
                option
                    .setName('ссылка')
                    .setDescription('отправьте ссылку на мероприятие')
                    .setRequired(true)
                )
                .addIntegerOption(option =>
                option
                    .setName('ид')
                    .setDescription('ID в игре того, кому нужно выдать Т/С')
                    .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('транспорт')
                        .setDescription('список Т/С необходимых вам')
                        .setRequired(true)
                )
                .addIntegerOption(option =>
                    option
                        .setName('количество')
                        .setDescription('напишите кол-во авто нужных вам')
                        .setRequired(true)
                )
        ),

    async execute(interaction) {
            switch(interaction.options.getSubcommand()) {
                case('vehicle'):
                    const adminrole = "1082620880619831327"
                    require('./event/vehicle')(interaction, adminrole)
                    return;
            }
    }
}