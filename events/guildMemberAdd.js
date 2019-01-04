const Discord = require('discord.js');

module.exports = async (client, member) => {
    
    // send message to channel 
    client.welcomeNewMembers(member);

    // call `projects` command 
    let chan = {}
    chan["channel"] = await client.channels.get("524880564302381058")
    client.commands.get('projects').run(client, chan)

    // Set Bot Activity to correct user count
    client.setUserCount()
};