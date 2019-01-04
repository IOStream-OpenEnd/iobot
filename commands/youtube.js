exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
console.log("args", args)
    if(message === "bot") checkForNewVideos(client, args)
    else{
        if(!args[0]) showLatest(client, message)
    }

};

const showLatest = (client, message) => {
    const data = require('../data/youtube-videos.json')

    let fields = [];
    let ind = 0;
    data.content.forEach(video => {
        if(ind < 5) fields.push([video.snippet.title, `${video.snippet.description}\n:arrow_forward: [Watch it here](https://www.youtube.com/watch?v=${video.id.videoId})\n\n.`, true])
        ind = ind + 1
    });

    client.sendembed({
        "method": message.channel,
        "author": ["I.O. Stream - Youtube Channel", client.user.avatarURL],
        "url": `https://www.youtube.com/channel/UC9S1O55MD9kzL5wRDFL_o5A`,
        "thumb": "https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/youtube_v2-512.png",
        "title": `I.O Streams Latest Videos`,
        "color": "#ff0000",
        "desc": `I.O.Stream is the primary end of a larger system called I.O.Space. I.O.Space aims at bringing the best and most importantly relevant information for people you are more than mere consumers - those who want to build technologies. Run by mind of a software developer and a philosopher by heart, I.O.Stream brings content to anyone who wants to write some code and see the magic happen. College students, developers in industries, all welcomed.`,
        "fields": fields
    })

}

const checkForNewVideos = async (client, args) => {
    console.log(args)
    const stats = args[1]
    const fields = [
        [`Watch it now`, `:arrow_forward: [Find it here](https://www.youtube.com/watch?v=${args[0].id.videoId})`, true],
        ["Subscribers", `:family: ${stats.subscriberCount}`, true],
        ["Total Views", `:eye: ${stats.viewCount}`, true],
        ["Video Count", `:tv: ${stats.videoCount}`, true]
    ]
    client.sendembed({
        "method": client.channels.get("530080830962401295"),
        "author": ["I.O. Stream - Posted a new video!", client.user.avatarURL],
        "url": `https://www.youtube.com/watch?v=${args[0].id.videoId}`,
        "thumb": "https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/youtube_v2-512.png",
        "title": args[0].snippet.title,
        "color": "#ff0000",
        "desc": `${args[0].snippet.description} \n\n `,
        "image": args[0].snippet.thumbnails.high.url,
        "fields": fields
    })
}

exports.conf = {
    enabled: true,
    aliases: ["yt"],
};

exports.help = {
    name: "youtube",
    description: "Announces a new video",
    usage: "youtube"
};