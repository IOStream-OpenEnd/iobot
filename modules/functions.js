module.exports = (client) => {

  client.getSettings = () => {
    console.log(client.settings.general)
    return client.settings.general
  }



  // Update User Stats Function
  client.updateUser = (message, stat) => {
    // console.log(message)
    const name = message.author.username;
    const uuid = message.author.id;

    let JoinedZtm = message.guild.members.get(uuid).joinedAt
    let joinedDiscord = client.users.get(uuid).createdAt

    const mCount = (stat === "mCount" ? 1 : 0);
    const cmd = (stat === "cmd" ? 1 : 0);
  }

  // EST TIMEZONE
  client.timeEST = () => {
    //  time convertion to EST
    var dt = new Date();
    var offset = -300; //Timezone offset for EST in minutes.
    return new Date(dt.getTime() + offset * 60 * 1000);
  }
  client.dateEST = () => {
    //  date convertion to EST
    var dt = new Date();
    var offset = -300; //Timezone offset for EST in minutes.
    let d = new Date(dt.getTime() + offset * 60 * 1000)
    console.log("DATE __ ", d.getDate())
    return d.getDate();
  }

  // musical functions starts here dodooodddoodoooododoo

  client.isSkipped = false;
  // client.skipperUser = null;
  client.volume = 6;

  /*
     PERMISSION LEVEL FUNCTION
     This is a very basic permission system for commands which uses "levels"
     "spaces" are intentionally left black so you can add them if you want.
     NEVER GIVE ANYONE BUT OWNER THE LEVEL 10! By default this can run any
     command including the VERY DANGEROUS `eval` and `exec` commands!
     */
  client.permlevel = message => {
    let permlvl = 0;

    const permOrder = client.settings.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
      const currentLevel = permOrder.shift();

      if (message.guild && currentLevel.guildOnly) continue;

      if (currentLevel.check(message)) {

        permlvl = currentLevel.level;

        break;
      }
    }

    return permlvl;
  };

  /*
  GUILD SETTINGS FUNCTION
  This function merges the default settings (from config.defaultSettings) with any
  guild override you might have for particular guild. If no overrides are present,
  the default settings are used.
  */
  client.getGuildSettings = (guild) => {
    const def = client.settings.general;
    if (!guild) return def;
    const returns = {};
    const overrides = client.settings.get(guild.id) || {};
    for (const key in def) {
      returns[key] = overrides[key] || def[key];
    }
    // console.log(returns)
    return returns;
  };
  /*
  SINGLE-LINE AWAITMESSAGE
  A simple way to grab a single reply, from the user that initiated
  the command. Useful to get "precisions" on certain things...
  USAGE
  const response = await client.awaitReply(msg, "Favourite Color?");
  msg.reply(`Oh, I really love ${response} too!`);
  */
  client.awaitReply = async (msg, question, limit = 10000) => {
    const filter = m => m.author.id === msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
      return collected.first();
    } catch (e) {
      return msg.channel.send("You didnt respond quick enough");
    }
  };

  client.loadCommand = (commandName) => {
    try {
      console.log(`Loading Command: ${commandName}`);
      const props = require(`../commands/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
        console.log("Alias: " + props.help.name + " loaded")
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command) return `The command \`${commandName}\` doesn"t seem to exist, nor is it an alias. Try again!`;

    if (command.shutdown) {
      await command.shutdown(client);
    }
    const mod = require.cache[require.resolve(`../commands/${commandName}`)];
    delete require.cache[require.resolve(`../commands/${commandName}.js`)];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };

  /* MISCELANEOUS NON-CRITICAL FUNCTIONS */

  // EXTENDING NATIVE TYPES IS BAD PRACTICE. Why? Because if JavaScript adds this
  // later, this conflicts with native code. Also, if some other lib you use does
  // this, a conflict also occurs. KNOWING THIS however, the following 2 methods
  // are, we feel, very useful in code.

  // <String>.toPropercase() returns a proper-cased string such as:
  // "Mary had a little lamb".toProperCase() returns "Mary Had A Little Lamb"
  String.prototype.toProperCase = function () {
    return this.replace(/([^\W_]+[^\s-]*) */g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  };

  // <Array>.random() returns a single random element from an array
  // [1, 2, 3, 4, 5].random() can return 1, 2, 3, 4 or 5.
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
  };

  // `await client.wait(1000);` to "pause" for 1 second.
  client.wait = require("util").promisify(setTimeout);

  // These 2 process methods will catch exceptions and give *more details* about the error and stack trace.
  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.log(`Uncaught Exception: ${errorMsg}`);
    // Always best practice to let the code crash on uncaught exceptions.
    // Because you should be catching them anyway.
    process.exit(1);
  });

  process.on("unhandledRejection", err => {
    console.log(`Unhandled rejection: ${err}`);
  });

};