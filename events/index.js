const {EmbedBuilder} = require("discord.js");
module.exports = (client) => {
    client
        .on('ready', () => {
            console.log(`Login as ${client.user.username}`)
        })

        .on('messageCreate', async message =>{
            const args = message.content.slice(1).trim().split(/ +/g);
            let cmd = message.content.slice(1)
            switch (cmd) {
                case 'help':
                    const HelpEmbed = new EmbedBuilder()
                        .setTitle('Help Embed')
                        .setDescription("None Description")
                        .setColor("DarkGold")
                        .setFields({name: "FieldName", value:"FieldValue"},{name: "FieldName", value:"FieldValue"},{name: "FieldName", value:"FieldValue"})
                        .setAuthor({name:client.user.username,iconURL: client.user.avatarURL()})
                    await message.reply({embeds:[HelpEmbed]})
            }
        })
}