const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Bans a user from the server",
  execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply("You don't have permission to use this command.");
    }

    const user = message.mentions.users.first();
    if (!user) return message.reply("You need to mention a user!");

    message.guild.members.ban(user)
      .then(() => message.reply(`${user.tag} has been banned.`))
      .catch(err => message.reply("I couldn't ban that user."));
  }
};
