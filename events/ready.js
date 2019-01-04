module.exports = async client => {
    // Await for all guild infromation to come in
    await client.wait(1000);

    // Set the Bots Status
    client.user.setStatus(client.settings.botStatus)

    // Sets the bot "playing game message"
    client.setUserCount()

    // Log that the bot is online.
    console.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`);

    // Logs the bots invite to server code in the console
    try {
        let link = await client.generateInvite(["ADMINISTRATOR"]);
        console.debug("Bot Invite: " + link);
    } catch (e) {
        console.log(e.stack)
    }

    // Checks for new youtube videos
    // client.checkYoutube()
};
