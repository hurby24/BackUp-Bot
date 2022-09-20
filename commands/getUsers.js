const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js')
const { Users } = require("../utils/users")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("getusers")
    .setDescription("Get all users from the database by role")
    .addRoleOption(
        option => option
        .setName("role")
        .setDescription("Role to get users")
        .setRequired(true)
    ),
    run: async (interaction) => {
        //check if users is empty
        const users_check = await Users.find()
        if (users_check.length === 0) {
            const exampleEmbed = new EmbedBuilder()
            .setColor("Red")
            .setTitle(` ❌ Database is empty, please use /backup to backup all users`)
            interaction.reply({ embeds: [exampleEmbed] });
            return
        }
        //get role from interaction
        const role = interaction.options.getRole("role")
        //get all users from database
        const users = await Users.find({ roles: role.id })

        const exampleEmbed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(`Users with "${role.name}" role`)
        .setDescription(users.map(user => `<@${user.id}>`).join(" "))
        interaction.reply({ embeds: [exampleEmbed] });
    }
}