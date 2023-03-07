const {SlashCommandSubcommandBuilder} = require("discord.js");
module.exports = (command) => {
command.addSubcommand(
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
}