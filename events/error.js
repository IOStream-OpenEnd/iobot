module.exports = async (client, error) => {
    console.log(`An error event was sent by Discord.js: \n${JSON.stringify(error)}`, "[error]");
};
  