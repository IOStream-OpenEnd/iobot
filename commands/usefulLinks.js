exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    await client.sendembed({
        "method": message.channel,
        "color": "#ffff00",
        "title": "Handy Links",
        "desc": "Here are some links that you might find useful!",
        "fields": [
           ["Youtube:", "[I.O. Stream](https://www.youtube.com/channel/UC9S1O55MD9kzL5wRDFL_o5A)", true],
           ["Twitter:","[@IOStreamTweets](https://twitter.com/IOStreamTweets)", true],
           ["Facebook:","[@10stream](https://www.facebook.com/10stream)", true],
           ["Instagram","[@i.o.stream](https://www.instagram.com/i.o.stream)", true],
           ["Github:","[@supragya](https://github.com/supragya)", true],
           ["Github", "[@IOStream OpenEnd](https://github.com/IOStream-OpenEnd)", true]
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