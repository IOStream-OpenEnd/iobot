const fetch = require('node-fetch');
const moment = require('moment');

const data = {
    "MagikMoments": {
        "status": "Complete",
        "manager": "K-11"
    },
    "BeatsCompiler": {
        "status": "unknown",
        "manager": "shawayusx"
    },
    "composiAI": {
        "status": "Just Started",
        "manager": "DeveloperGuruji"
    }
}

const logo = {
    python: ["http://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png", "#4B8BBE"],
    javascript: ["http://pluspng.com/img-png/logo-javascript-png-javascript-tutorials-400.png", "#f7df1e"]
}

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars


    // Fetch project data from github
    let projects;
    await fetch(`https://api.github.com/orgs/IOStream-OpenEnd/repos`)
        .then(res => res.json())
        .then(json => projects = json)

    // Route Command Args
    if (!args[0]) message.channel.send(`You didnt specify a project name. Please checkout ${getChan(message, "projects-overview")} for more information on projects`)
    else if (args[0] === "init") menuInit(client, message, projects)
    else {
        const proj = projects.find(p => p.name === args[0])
        if (proj) sendProject(client, message, proj)
        else message.channel.send(`We could not find a project matching that name. Please check out ${getChan(message, "projects-overview")} for more information on available projects`)
    }
};

const getChan = (message, name) => {
    const chan = message.guild.channels.find(c => c.name === name.toLowerCase())
    if (chan === null || chan === undefined) return `**Unknown!**`
    else return chan.toString()
}

const menuInit = async (client, message, projects) => {
    if (message.member.roles.some(r => ["Admin", "Moderators"].includes(r.name))) {
        let modRole = message.guild.roles.find(role => role.name === "Moderators");
        await client.sendembed({
            "method": message.channel,
            "color": "#000",
            "title": "OpenEnd Projects",
            "url": "https://github.com/IOStream-OpenEnd/",
            "thumb": projects[0].owner.avatar_url,
            "desc": `There are currently ${projects.length} opensource projects available for you to join. To participate in a project, find one that you would be interested in joining and contact the project manager, who will then be able to get you set up and ready to collaborate.`,
            "fields": [
                ["Suggest a Project Idea?", `If you have an idea for a project, head on over to ${getChan(message, "project-ideas")} to make your project suggestion.`],
                ["Want to lead a project?", `If you would like to lead a project, simply have a chat with a ${modRole.toString()} and they will be able to get everything set up for you.`]
            ]
        })

        projects.forEach(async p => {
            await fetch(`${p.html_url}/bot.json `)
                .then(res => res.json())
                .then(json => sendProject(client, message, p, json))
        });
    } else message.channel.send("This command is designed to re-populate the #projects-overview channel and requires Moderators permission level or above. Please contact a Moderator if you think this really needs posting again.")

}



const sendProject = (client, message, p, details) => {
    let mana = (data[p.name] ? client.users.find(u => u.username === data[p.name]["manager"]) : "Unknown");


    client.sendembed({
        "method": message.channel,
        "color": (p.language !== null ? logo[p.language.toLowerCase()][1] : ""),
        "title": p.name,
        "desc": (p.description !== null ? p.description : "No description set"),
        "thumb": (p.language !== null ? logo[p.language.toLowerCase()][0] : ``),
        "fields": [
            ["Project Manager", mana, true],
            ["Discussion Channel", getChan(message, p.name), true],
            ["Project Language", p.language, true],
            ["Project Status", (details ? details["status"] : "Unknown"), true],
            ["GitHub Repository", `[Here](${p.html_url})`, true],
            ["Issues", p.open_issues, true],
            ["Forks", p.forks, true],
            ["Stars", p.stargazers_count, true]
        ],
        "footer": "Project Started: " + moment(p.created_at).format('MMMM Do YYYY, h:mm:ss a')
    })
}

exports.conf = {
    enabled: true,
    aliases: ["pr"],
};

exports.help = {
    name: "projects",
    description: "Find out about the latest projects",
    usage: "ping"
};