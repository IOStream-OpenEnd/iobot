exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    client.sendembed({
        "method": message.channel,
        "color": "#ff0055",
        "title": "WELCOME TO I.O.STREAM",
        "desc": "I.O.Stream is the primary end of a larger system called I.O.Space. I.O.Space aims at bringing the best and most importantly relevant information for people you are more than mere consumers - those who want to build technologies. Run by mind of a software developer and a philosopher by heart, I.O.Stream brings content to anyone who wants to write some code and see the magic happen. College students, developers in industries, all welcomed.",
        "thumb": client.user.avatarURL,
    })
  };
  
  exports.conf = {
    enabled: true,
    aliases: ["w"],
  };
  
  exports.help = {
    name: "welcome",
    description: "Presents the welcome message",
    usage: "welcome"
  };