const Discord = require("discord.js");
const client = new Discord.Client();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
require(`./modules/embeds`)(client)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Require Congigs, Functions and Modules
client.settings = {} = require("./config.js")(client);
require("./modules/functions.js")(client);

const init = async () => {

    console.log("\n\n          ============\n              Logs\n          ============\n")

    // Load Commands
    const cmdFiles = await readdir("./commands/");
    console.log(`Loading a total of ${cmdFiles.length} commands.`);
    cmdFiles.forEach(file => {
        if (!file.endsWith(".js")) return;
        const response = client.loadCommand(file);
        if (response) console.log(response);
    });

    // Then we load events, which will include our message and ready event.
    const evtFiles = await readdir("./events/");
    console.log(`Loading a total of ${evtFiles.length} events.`);
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0];
        console.log(`Loading Event: ${eventName}`);
        const event = require(`./events/${file}`);
        client.on(eventName, event.bind(null, client));
    });



    client.login(client.settings.token);
}

init()

// this LoC is needed in order to deploy it to Zeit 
require('http').createServer().listen(3000);
