const {EmbedBuilder} = require("discord.js");
module.exports = (client) => {
    client
        .on('messageCreate', async message =>{
                const args = message.content.slice(1).trim().split(/ +/g);
                let cmd = message.content.slice(1)
                switch (cmd) {
                    case 'help':
                        require('../commands/prefix_commands/help')(message, client);
                        return
                    case 'server':
                        require('../commands/prefix_commands/server')(message.guild, message)
                }
            })
}