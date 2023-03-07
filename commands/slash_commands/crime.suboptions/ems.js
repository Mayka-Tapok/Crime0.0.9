const {SlashCommandSubcommandBuilder} = require("discord.js");
module.exports = (command) => {
    command.addSubcommand(
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
}