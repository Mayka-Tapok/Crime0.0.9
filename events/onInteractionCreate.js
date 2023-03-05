module.exports = (client, cmd) => {
    client
        .on('interactionCreate', async interaction =>{
            if (!interaction.isChatInputCommand()) return;
            const command = cmd.get(interaction.commandName);
            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: `There was an error while executing this command!\n ***${error}***`, ephemeral: true });
                } else {
                    await interaction.reply({ content: `There was an error while executing this command! ***${error}***`, ephemeral: true });
                }
            }
        });
}