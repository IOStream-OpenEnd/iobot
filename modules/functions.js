const fetch = require('node-fetch');
fs = require('fs');

module.exports = (client) => {

  client.setUserCount = async () => {
    const io = client.guilds.get(client.settings.serverID)
    await io.fetchMembers()
    let uCount = io.members.filter(member => !member.user.bot).size
    client.user.setPresence({
      game: {
        name: `over ${uCount} Users!`,
        type: "WATCHING"
      }
    });
  }

  client.checkYoutube = async () => {
    // Load local data file
    let data = JSON.parse(fs.readFileSync("./data/youtube-videos.json", "utf8"));
    // Fetch YT-Channel Stats
    await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${client.settings.youtubeID}&key=${client.settings.ytapi}`)
      .then(res => res.json())
      .then(json => data.stats = json.items[0].statistics)

    // Fetch YT-Channel Content Info
    await fetch(`https://www.googleapis.com/youtube/v3/search?key=${client.settings.ytapi}&channelId=${client.settings.youtubeID}&part=snippet,id&order=date&maxResults=50`)
      .then(res => res.json())
      .then(json =>
        json.items.forEach(item => {
          if (item.id.videoId && !data.ids.includes(item.id.videoId)) {
            data.ids.push(item.id.videoId)
            data.content.push(item)
            client.commands.get('youtube').run(client, "bot", [item, data.stats])
          }
        })
      );
    fs.writeFile("./data/youtube-videos.json", JSON.stringify(data), (err) => {
      // if (err) console.error(err)
    });
  }

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


  /**
   * Send a welcome message to the newly joined members
   */
  client.welcomeNewMembers = async (member) => {

    client.sendembed({
      "ping": member.toString(),
      "method": member.guild.channels.find("name", "iobot"),
      "author": ["I.O. Stream", client.user.avatarURL],
      "thumb": "https://media.discordapp.net/attachments/467378225144791051/530332456155480094/welcome.png",
      "title": `Welcome to IO Stream`,
      "color": "#ff0000",
      "desc": `Hey _${member.toString()}_ Welcome to the I.0.Space Discord Server. We are thrilled that you have joined I.0.Stream community. \n\nPlease be sure to check out the ${member.guild.channels.find("name", "welcome")} channel, to learn more about us and familiarise yourself with the rules. \n\nWe then recommend that you head on over to ${member.guild.channels.find("name", "projects-overview")} for more information on the opensource projects you can contribute to. \n\nIf you have an questions of suggestions, please reach out to a ${member.guild.roles.find(role => role.name === "Moderators")}`
    })
  }
};