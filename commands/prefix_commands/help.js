const {EmbedBuilder} = require("discord.js");
module.exports = (message, client) => {
    const PrefixCommands = [
        {name: "help", description:"Это команда отправляет сообщение, которое содержит в себе список всех команд"},
        {name: "server", description:"Команда отправляет информацию о сервере(не активна)"},
    ]

    const HelpEmbed = new EmbedBuilder()
        .setTitle('Помощник')
        .setDescription("Подомной вы увидите доступные для использования команды")
        .setColor("DarkGold")
        .setAuthor({name:client.user.username,iconURL: client.user.avatarURL()})
        PrefixCommands.map(obj =>{
            HelpEmbed.addFields({name: obj.name, value: obj.description})
            }
        )
    message.reply({embeds:[HelpEmbed]})
}