exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    client.sendembed({
        "method": message.channel,
        "color": "#000",
        "title": "OpenEnd Projects",
        "desc": "There are currently 4 opensource projects available for you to join, you will find information on these below.",
        "fields": [
            ["magikm0ments", "Project Manager: @Name\nLang: Python\nStatus: Nearing completion\nChannel: [Here](https://discordapp.com/channels/524880564302381056/525564160365297694)", true],
            ["b3atsc0mpiler", "Project Manager: @Name\nLang: Python\nStatus: Nearing completion\nChannel: [Here](https://discordapp.com/channels/524880564302381056/525564160365297694)", true],
            ["io-bot", `Project Manager: ${client.users.get('179604866807627777').toString()}\nLang: Javascript\nStatus: Nearing completion\nChannel: [Here](https://discordapp.com/channels/524880564302381056/525564160365297694)`, true],
            ["magikm0ments", "Project Manager: @Name\nLang: Python\nStatus: Nearing completion\nChannel: [Here](https://discordapp.com/channels/524880564302381056/525564160365297694)", true]
        ]
    })
};

exports.conf = {
    enabled: true,
    aliases: [],
};

exports.help = {
    name: "projects",
    description: "Find out about the latest projects",
    usage: "ping"
};