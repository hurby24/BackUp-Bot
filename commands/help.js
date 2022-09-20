const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get help"),
    run: async (interaction) => {
        const exampleEmbed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(`Help`)
        .setDescription(`**/backup**\nBackup all users in the database\n
        **/getuser**\nGet a user info from the database\n
        **/getusers**\nGet all users from the database by role`)
        .setTimestamp()
        .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
        interaction.reply({ embeds: [exampleEmbed] });
    }
}