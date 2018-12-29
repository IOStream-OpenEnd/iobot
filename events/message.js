
//This event fires every time a message is received
module.exports = async (client, message) => {

  // Ignore bots
  if (message.author.bot) {
    client.updateUser(message, "mCount")
    return;
  }

  // Checks if the bot was mentioned, with no message after it, returns the prefix.
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    message.reply(`My prefix on this server is \`${client.settings.general.prefix}\``)
  }

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if (message.content.indexOf(client.settings.general.prefix) !== 0) {
    client.updateUser(message, "mCount")
    return;
  }

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(client.settings.general.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // If the member on a guild is invisible or not cached, fetch them.
  if (message.guild && !message.member) await message.guild.fetchMember(message.author);

  // Get the user or member's permission level from the elevation
  const level = client.permlevel(message);

  // Check whether the command, or alias, exist in the collections defined
  // in app.js.
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  // using this const varName = thing OR otherthign; is a pretty efficient
  // and clean way to grab one of 2 values!
  if (!cmd) return;

  // Some commands may not be useable in DMs. This check prevents those commands from running
  // and return a friendly error message.
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");
  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (client.settings.systemNotice === "true") {
      logit.log(`${message.author.user} issued a command they do not have permission for. They have level $[level}`)
      return message.channel.send(`You do not have permission to use this command.
    Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
    This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }

  // To simplify message arguments, the author's level is now put on level (not member so it is supported in DMs)
  // The "level" command module argument will be deprecated in the future.
  message.author.permLevel = level;

  // If the command exists, **AND** the user has permission, run it.
  client.updateUser(message, "cmd")
  cmd.run(client, message, args, level);
};