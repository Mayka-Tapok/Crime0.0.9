const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');




module.exports = {
    data: new SlashCommandBuilder()
        .setName('deploycmd')
        .setDescription('[Developer] Deploy new commands from the code'),
    async execute(interaction) {
        if(interaction.guild.ownerId === interaction.user.id){
            try{
                await interaction.reply({content: "Trying to get commands", ephemeral: true})
                require('../../deploy-commands');
                interaction.editReply({content: "Succesfully"})

            }catch(error){
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: `There was an error while executing this command!\n ***${error}***`, ephemeral: true });
                    return;
                } else {
                    await interaction.reply({ content: `There was an error while executing this command! ***${error}***`, ephemeral: true });
                    return;
                }
            }
        }else{
            interaction.reply({content: "You are not a developer", ephemeral: true})
        }
    },
};