exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    client.setUserCount(true)
   };
   
   exports.conf = {
     enabled: true,
     aliases: [],
   };
   
   exports.help = {
     name: "update"
   };