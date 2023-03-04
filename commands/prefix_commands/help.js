const {EmbedBuilder, Collection} = require("discord.js");
const path = require("node:path");
const fs = require("node:fs");


module.exports = (message, client) => {


    client.commands = new Collection();

    const commandsPath = path.join(__dirname, './');

    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));




    const HelpEmbed = new EmbedBuilder()
        .setTitle('Помощник')
        .setDescription("Ниже вы увидите доступные команды")
        .setColor("DarkGold")
        .setAuthor({name:client.user.username,iconURL: client.user.avatarURL()})
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        try{
            HelpEmbed.addFields({name: `Prefix Command: ${file.split('.')[0]}`, value: `None description`})
        }catch(error){
            console.log(`[WARNING] ${error}`);
        }
    }
    message.reply({embeds:[HelpEmbed]})
}