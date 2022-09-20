const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js')
const { Users } = require("../utils/users")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("getuser")
    .setDescription("Get a user info from the database")
    .addUserOption(
        option => option
        .setName("user")
        .setDescription("User to get info")
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
        //get user from interaction
        const user = interaction.options.getUser("user")
        //get user from database
        const userData = await Users.findOne({ id: user.id })
        if(!userData) {
            const exampleEmbed = new EmbedBuilder()
            .setColor("Red")
            .setTitle(` ❌ User not found`)
            interaction.reply({ embeds: [exampleEmbed] });
            return
        }
        const exampleEmbed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(`User info`)
        .setThumbnail(userData.profile)
        .setDescription(`👤 \*\*Username:\*\* ${userData.username} \n
        \*\*🆔 User id:\*\* ${userData.id}\n
        \*\*⌛ Created at:\*\* ${user.createdAt}\n
        \*\*🟡 Roles:\*\* ${userData.roles.map(role => `<@&${role}>`).join(" ")}`)
        interaction.reply({ embeds: [exampleEmbed] });
    }

}