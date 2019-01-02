module.exports = (client) => {
  const config = {
    // Anything in this file can be called by using `client.settings.<name>`
    // Eg. client.settings.token

    // Set Token Variable
    "token": process.env.BOT_TOKEN,

    // Youtube API Toke:
    "ytapi": process.env.YT_TOKEN,

    // Server ID
    "serverID": "524880564302381056",
    
    // Set bots prefix
    "prefix": "+",


    // Set bot status, choose from: "online", "away", "dnd", "invisible"
    "botStatus": "dnd",

    //set bot activity type, choose from: "PLAYING", "LISTENING", "WATCHING"
    "botActivity": "WATCHING",

    // Youtube ID
    "youtubeID": "UC9S1O55MD9kzL5wRDFL_o5A",

    //Commonly used channels, call them with `client.setting.channels.<name>`
    "channels": {
      "modLogChannel": "mod-log"
    }
  };
  return config
}