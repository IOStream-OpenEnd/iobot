exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    await client.sendembed({
        "method": message.channel,
        "color": "#ffff00",
        "title": "Handy Links",
        "desc": "Here are some links that you might find useful!",
        "fields": [
           ["Youtube:", "[Here](https://www.youtube.com/channel/UC9S1O55MD9kzL5wRDFL_o5A)", true],
           ["Twitter:","[Here](https://twitter.com/IOStreamTweets)", true],
           ["Facebook:","[Here](https://www.facebook.com/10stream)", true],
           ["Instagram","[Here](https://www.instagram.com/i.o.stream)", true],
           ["Supragya's Github:","[Here](https://github.com/supragya)", true],
           ["OpenEnd Org Github", "[Here](https://github.com/IOStream-OpenEnd)", true]
        ]
    })

    message.channel.send("**Public Invite Link**\nShare this link with your friends: https://discord.gg/J9EryGj")
    
  };

  
  exports.conf = {
    enabled: true,
    aliases: ["l"],
  };
  
  exports.help = {
    name: "links",
    description: "Presents the links message",
    usage: "links"
  };