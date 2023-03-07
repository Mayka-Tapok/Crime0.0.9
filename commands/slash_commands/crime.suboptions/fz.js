const {SlashCommandSubcommandBuilder} = require("discord.js");
module.exports = (command) => {
command.addSubcommand(
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
}