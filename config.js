module.exports = (client) => {
  const config = {
    // Anything in this file can be called by using `client.settings.<name>`
    // Eg. client.settings.token

    // Set Token Variable
    "token": "process.env.BOT_TOKEN",
    
    // Set bots prefix
    "prefix": "+",

    // Set bot status, choose from: "online", "away", "dnd", "invisible"
    "botStatus": "dnd",

    //set bot activity type, choose from: "PLAYING", "LISTENING", "WATCHING"
    "botActivity": "WATCHING",

    // Set bots activity message
    "botActivityMessage": `over ${client.users.filter(m => !m.bot).size} Users!`,

    //Commonly used channels, call them with `client.setting.channels.<name>`
    "channels": {
      "modLogChannel": "mod-log"
    }
  };
  return config
}