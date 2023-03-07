const {ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle} = require("discord.js");
module.exports = () => {
    const modal = new ModalBuilder()
        .setCustomId('myModal')
        .setTitle('My Modal');

    // Add components to modal

    // Create the text input components
    const commentinput = new TextInputBuilder()
        .setCustomId('comment')
        // The label is the prompt the user sees for this input
        .setLabel("What's your favorite color?")
        // Short means only a single line of text
        .setStyle(TextInputStyle.Short);
    // An action row only holds one text input,
    // so you need one action row per text input.
    const comment = new ActionRowBuilder().addComponents(commentinput);

    // Add inputs to the modal
    modal.addComponents(comment);
}