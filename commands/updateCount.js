exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if(!args[0]) client.setUserCount(true)
  else if(args[0] === "join") {
    client.emit("guildMemberAdd", message.member);
  }
   };
   
   exports.conf = {
     enabled: true,
     aliases: [],
   };
   
   exports.help = {
     name: "update"
   };