const Discord = require('discord.js');

module.exports = async (client, member) => {
    // client.on('guildMemberAdd', member => {
        console.log('New Mem')
        let embed = new Discord.RichEmbed()
            .setAuthor(client.user.tag, client.user.avatarURL)
            .setColor('#ff0055')
            .setThumbnail(client.user.avatarURL)
            .setURL('https://www.youtube.com/channel/UC9S1O55MD9kzL5wRDFL_o5A')
            .setImage('https://yt3.ggpht.com/b6Tztm-_pJRCscwX7teYD5_kzc2IGqxA57QIgo_heIwI4yzRhAd1HVhsJYf-lwsZLONbhWRfow=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no')
            .setTitle('Welcome!! :sparkler:')
            .setDescription('Welcome to I.0.Space Discord Server. We are thrilled that you have joined I.0.Stream community. You will be glad to know that there is much more awaiting discovery than meets the eye.')
            .addBlankField()
            .addField('**I.0.Stream**', '[YouTube channel featuring content pertaining to software development, technology, philosophy etc](https://www.youtube.com/channel/UC9S1O55MD9kzL5wRDFL_o5A). This is the most common way by which subscribers find themselves becoming a part of I.0.Space.')
            .addField('**I.0.Stream-OpenEnd**', '[I.0.Space\'s open source software development and hands on learning end](http://github.com/IOStream-OpenEnd/). Subscribers of I.0.Space can freely interact with each other and develop software and hardware projects with each other.')
            .addField('**I.0.Community**', 'The community end of I.0.Space which features text and voice communication between subscribers on a discord channel. Discussions for the projects undertaken by the OpenEnd are done here as well.')
            .addBlankField()
            .addField('**HELP US**', 'I.0.Community members can help the community by taking up various roles in the server as well. Following are the list of roles available for anyone who wants to undertake these responsibilities:')
            .addField('Moderators', 'Members experienced in managing online chatrooms or those who wants to undertake general moderation duties are presented with the role of moderators.')
            .addField('Project Managers', 'Members who would like to manage projects undertaken by I.0.Stream OpenEnd have been presented with this role. **Project Managers** have ruling over the presenting other interested community members with')
            .addBlankField()
            .addField(':cop: **RULES && REGULATIONS**', `With great power comes great responsibility as well. Being a member of I.0.Community, you are expected to abide by the following rules and regulations set forth by I.0.Space:- \n\n - **Absolutely NO swearing or any kind of racism/hate speech/abusive behaviour towards any of the members in the server.** \n - Do NOT spam (Excessive Use Of) Emojis, Emotes And Caps. \n - **Absolutely NO Self Promotion. This includes links to other discord servers, YouTube etc.** \n - Do NOT send/ask for personal and private information of other members. \n - **Do NOT ask for any roles/ranks**. \n - Do NOT send NSFW/LEWD images or links in any of the chats, this will directly lead to a ban. \n - **Do NOT use NSFW/ Disturbing images as your Profile Pictures, You will be asked to change them immediately.** \n - Realize that everyone working here is actually a volunteer for the cause. Please do remember it and treat everyone with respect. \n - **Speak only in English throughout all text channels.**`);
        member.sendEmbed(embed);
    // })
};
  