//Я доделаю это потом

const {SlashCommandBuilder, SlashCommandSubcommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('crime')
        .setDescription('D')
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('army')
                .setDescription('[Crime] Отпись о нападении на поставку army')
                .addAttachmentOption(option =>
                option
                    .setName('proofs')
                    .setDescription("Сюда крепите скрин оповещения о поставке(который в чате)")
                    .setRequired(true)
                )
                .addRoleOption(option =>
                option
                    .setName('fraction')
                    .setDescription('Укажите вашу фракцию')
                    .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('union')
                        .setDescription('Сюда вписываете фракцию, которая нападет вместе с вами(если таковая есть)')
                )
                .addStringOption(option =>
                    option
                        .setName('comment')
                        .setDescription('Комменатрий [Необязательно]')
                )

        ),
    async execute(interaction) {
// || interaction.client.user.cache() || interaction.client.user.cache.has() || interaction.client.user.cache.has() || interaction.client.user.cache.has()
        if(interaction.member.roles.cache.has("1081562684681621545") || interaction.member.roles.cache.has("1081562556814065824") || interaction.member.roles.cache.has("1081562608471126056") || interaction.member.roles.cache.has("1081562636317110302") || interaction.member.roles.cache.has("1081562660421779526")){
            const union = interaction.options.getString('union')
            const fraction = interaction.options.getRole('fraction')
            const Embed = new EmbedBuilder()
                .setTitle('Отчет о нападении на поставку SANG')
                .addFields({name:"Фракция",value: `<@&${fraction.id}>`})
            if(union){
                    Embed.addFields({name:"Союзник",value:union})
                }
            await interaction.reply({embeds:[Embed],content:`***<@${interaction.member.id}> отправил отчет о нападении на поставку SANG***`})
        }else{
            const Embed = new EmbedBuilder()
                .setTitle('Permissions Error')
                .setDescription(`You cant use this command`)
                .addFields({name: "Error", value: `**This commands for: <@&1081562684681621545>,<@&1081562556814065824>,<@&1081562608471126056>,<@&1081562636317110302>,<@&1081562660421779526>**`})
                .setColor("DarkRed")
            await interaction.reply({embeds: [Embed], ephemeral: true, content: `<@${interaction.member.id}>`})
        }


    }
}