module.exports = (client) => {
  const config = {
    // Anything in this file can be called by using `client.settings.<name>`
    // Eg. client.settings.token

    // Set Token Variable
    "token": "process.env.BOT_TOKEN",

    // Server ID
    "serverID": "524880564302381056",
    
    // Set bots prefix
    "prefix": "+",

    // Set bot status, choose from: "online", "away", "dnd", "invisible"
    "botStatus": "dnd",

    //set bot activity type, choose from: "PLAYING", "LISTENING", "WATCHING"
    "botActivity": "WATCHING",

    //Commonly used channels, call them with `client.setting.channels.<name>`
    "channels": {
      "modLogChannel": "mod-log"
    }
  };
  return config
}