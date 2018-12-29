module.exports = (client) => {
    const Discord = require("discord.js");

    client.sendembed = (method, author, thumb, desc, fields, colour, boolean = false) => {
        let embed101 = new Discord.RichEmbed()
            .setAuthor(author)
            .setThumbnail(thumb)
            .setColor(colour)
            .setDescription(desc)

            if(fields){
                fields.forEach((f, i) => {
                    embed101.addField(f[0], f[1], f[2])
                })   
            } 
            method.send({embed: embed101});
      }
}
