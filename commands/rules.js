exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    client.sendembed({
        "method": message.channel,
        "color": "#FFA500",
        "title": "Guildlines & Rules",
        "desc": "To maintain peace within the server, we have set in place some guidelines/rules which are expected to be followed by everyone. IO Stream Discord server brings about all the people who want to contribute in making a great community",
        "fields": [
            [":large_orange_diamond:  Speak in English", "Members are requested to speak only in English throughout all text channels. This helps the moderators and other staff to monitor the chats.", true],
            [":large_orange_diamond:  Friendly Conversations", "Absolutely NO swearing or any kind of racism/hate speech/abusive behaviour towards any of the members in the server.", true],
            [":large_orange_diamond:  Limit emojis and caps", "Do NOT spam (Excessive Use Of) Emojis, Emotes And Caps.", true],
            [":large_orange_diamond:  Relevant Channels", "Use all channels accordingly. Any member seen using chats for any other purpose will be given a warning and then muted.", true],
            [":large_orange_diamond:  No Self Promotion", "Absolutely NO Self Promotion. This includes links to other discord servers, YouTube etc", true],
            [":large_orange_diamond:  Rank Assignment", "Do NOT ask for any roles/ranks. Appropriate roles will be assigned by staff.", true],
            [":large_orange_diamond:  Privacy", "Do NOT send/ask for personal and private information of other members."],
            [":large_orange_diamond:  Decissions are Final", "Do NOT argue or create drama related to staff actions. All staff actions are final and will not be changed. If any mod is at fault, take it to that particular mod's DMs."],
            [":large_orange_diamond:  Pings", "Do NOT use the @everyone or @here ping, use other role tags and member mentions sensibly."],
            [":large_orange_diamond:  Safe Content", "Do NOT send NSFW/LEWD images or links in any of the chats, this will directly lead to a ban."],
            [":large_orange_diamond:  Profile Avatars","Do NOT use NSFW/ Disturbing images as your Profile Pictures, You will be asked to change them immediately"],
            [":large_orange_diamond:  Common Sense","Common rules which are not listed here can and will be enforced by staff."],
            [":large_orange_diamond:  Respect Everyone","Realize that everyone working here is actually a volunteer for the cause. Please do remember it and treat everyone with respect."],
        ]
    })
  };
  
  exports.conf = {
    enabled: true,
    aliases: ["r"],
  };
  
  exports.help = {
    name: "rules",
    description: "Presents the rules message",
    usage: "rules"
  };