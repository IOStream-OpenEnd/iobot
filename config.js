module.exports = (client) => {
  const config = {
    // Anything in this file can be called by using `client.settings.<name>`
    // Eg. client.settings.token

    // Set Token Variable
    "token": require('./tokens.json').token,

    // Local Tokens
    "tokens": require('./tokens.json'),

    // Server ID
    "serverID": "504977712792731678",
    
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