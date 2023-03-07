const {EmbedBuilder} = require("discord.js");
module.exports = (client) => {
    client
        .on('messageCreate', async message =>{
            if(message.author.bot) return
            var now = new Date()
            const Embed = new EmbedBuilder()
                .setTitle("Новое сообщение")
                .setURL(message.url)
                .addFields(
                    {name: "Автор", value: `<@${message.author.id}>`},
                    {name: "Контент", value: message.content}
                )
                .setFooter({iconURL: "https://i.pinimg.com/originals/e1/1f/76/e11f768a24a13a845f723f98e720075e.jpg", text: `${now.toISOString().slice(0,10)}(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`})
                .setColor("Green")

            message.guild.channels.fetch('1082309490361258080')
                .then(channel => channel.send({embeds:[Embed]}))
        })
}