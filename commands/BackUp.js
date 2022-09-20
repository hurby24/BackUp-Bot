const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js')
const { Users } = require("../utils/users")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("backup")
    .setDescription("Backup all users in the database"),
    run: async (interaction) => {
        const members = await interaction.guild.members.fetch()
        
        members.forEach(async member => {
            const userData = await Users.findOne({ id: member.id })
            if (!userData) {
                await new Users({
                    id: member.id,
                    username: member.user.tag,
                    profile: member.user.displayAvatarURL(),
                    roles: member.roles.cache.map(role => role.id)
                }).save()
            }
        })
        const exampleEmbed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(` ✅ Backup complete`)
        interaction.reply({ embeds: [exampleEmbed] });
    }
}