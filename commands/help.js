const Discord = require("discord.js");
/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available.
*/

exports.run = (client, message, args, level) => {
  // If no specific command is called, show all filtered commands.
  if (!args[0]) {
    // Fetch all commands
    const myCommands = client.commands;

    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";

    let emHelp = new Discord.RichEmbed()
    .setAuthor(`Command Help List`)
    .setColor("BLUE")
    .setDescription(`${client.settings.prefix}help <commandname> for details`)

    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {

      emHelp.addField(`${client.settings.prefix}${c.help.name}`, `${c.help.description}`)

    });
        message.channel.send({embed: emHelp})
    //message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;

      let emIndCmd = new Discord.RichEmbed()
        .setAuthor(`${client.settings.prefix}${command.help.name} Information!`)
        .setColor("BLUE")
        .setDescription(`${command.help.description}`)
        .addField(":white_check_mark: **Usage:**", client.settings.prefix + command.help.usage, true)
        .addField(":unicorn:  **Aliases**", (command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "N/A"), true)

      message.channel.send({embed: emIndCmd})
    }
  }
};

exports.conf = {
  enabled: true,
  aliases: ["h", "halp"]
};

exports.help = {
  name: "help",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
