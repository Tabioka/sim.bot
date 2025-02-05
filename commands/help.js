module.exports = {
  name: "help",
  description: "Lists all commands",
  execute(interaction) {
    const commands = interaction.client.commands.map(cmd => `\`${cmd.name}\` - ${cmd.description}`).join("\n");
    interaction.reply(`Here are my commands:\n${commands}`);
  }
};
