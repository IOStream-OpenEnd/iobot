exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const projects = [
        {
            "name": "magikm0ments",
            "manager": "130519552361496577",
            "lang": "Python",
            "status": "Nearing completion",
            "link": "525564160365297694"
        },
        {
            "name": "b3atsc0mpiler",
            "manager": "527794552757813248",
            "lang": "Python",
            "status": "Nearing completion",
            "link": "528276844118802435"
        },
        {
            "name": "io-bot",
            "manager": "179604866807627777",
            "lang": "Javascript",
            "status": "Just Started",
            "link": "529351678466719755"
        },
        {
            "name": "composiAI",
            "manager": "525170427803467776",
            "lang": "Python",
            "status": "Just Started",
            "link": "530047749329125406"
        }
    ]
    const getChan = (id) => {
        if(!id || !message.guild.channels.get(id)) return "TBC"
        else return message.guild.channels.get(id).toString()
    }
    let fileds = [];
    projects.forEach(p => {
        let manager = (p.manager ? p.manager : `179604866807627777`)
        fileds.push(
            [p.name.toUpperCase(), `**Manager:** ${client.users.get(manager).toString()}\n**Language:** ${p.lang}\n**Status:** ${p.status}\n**Channel:** ${getChan(p.link)}`, true],
        )
    });

    client.sendembed({
        "method": message.channel,
        "color": "#000",
        "title": "OpenEnd Projects",
        "desc": `There are currently ${projects.length} opensource projects available for you to join, you will find information on these below. \n\n**Suggest a Project Idea?**\nIf you have an idea for a project, head on over to ${getChan(525245488488906753)} to make your project suggestion.\n\n**Want to lead a project?**\nIf you would like to lead a project, simply have a chat with a moderator and they will be able to get everything set up for you.`,
        "fields": fileds

    })
};

exports.conf = {
    enabled: true,
    aliases: ["pr"],
};

exports.help = {
    name: "projects",
    description: "Find out about the latest projects",
    usage: "ping"
};