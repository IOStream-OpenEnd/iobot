const Discord = require("discord.js");
const fetch = require('node-fetch');
const Turndown = require('turndown');

// init  && config
const TD = new Turndown();
fetch.promise = Promise;
const baseURL = 'https://developer.mozilla.org/en-US/search.json/?topic=javascript,html,css&q=';
const arrRandomQuery = ['width', 'height', 'split()', 'indexOf()', 'width', 'height', 'split()', 'indexOf()', 'length', 'Object.hasOwnProperty()'];

TD.addRule('mark', {
    filter: ['mark'],
    replacement: function (content) {
      return '`' + content + '`'
    }
})

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['m', 'moz', 'docs'],
    permLevel: "User"
};

exports.help = {
    name: "mdn",
    category: "Miscelaneous",
    description: "Search Docs from MDN",
    usage: "mdn random | mdn search [QUERY]"
};

// __main__
let fields, result;
exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars
  console.log(message.content)

    if (args[0] === 'random') {
        let randomQuery = arrRandomQuery[(Math.random() * 10).toFixed(0)];
        fetch(baseURL + randomQuery)
        .then(res => res.json())
        .then(res => {

            result = res.documents[0];
            fields = [
                ["Docs", result.url || 'NA', true], 
                ["Tags", result.tags.join(' · ') || 'NA', true]
            ];

            return client.sendembed(
                message.channel, 
                'Result For ' + result.title, 
                client.user.avatarURL, 
                TD.turndown(result.excerpt) || 'NA', 
                fields, 
                '#d30f65', 
                false
            )
        })

    } else if (args[0] === 'search') {

        // checks if it has a search query
        if (!args[1]) return client.sendembed(
            message.channel, 
            'No Search Query Detected', 
            client.user.avatarURL, 
            'You have to provide a search query. For example, `mdn Array.prototype.slice()`. For a random search, you can use `mdn random`',
            null, 
            '#d30f65', 
            false
        )
        // else search for docs
        else searchMDNDocs(args, client, message)
    }
}


/** Get the search term as param and send back the embed 
 * @param {Array} query
 * @param {Object} cliemt
 * @param {Object} message
*/
const searchMDNDocs = (query, client, message) => {
    let result, fields;
    fetch(baseURL + createSearchQuery(query))
    .then(res => res.json())
    .then(res => {

        // if no data from MDN
        if (res.documents.length === 0) {
            return client.sendembed(
                message.channel, 
                client.user.tag, 
                null, 
                'Couldn\'t find anything in MDN. Maybe try something else? :thinking:', 
                null, 
                '#b90900', 
                false
            )
        }

        // return search result 
        result = res.documents[0];
        fields = [
            ['Docs ', result.url || 'NA', false],
            ['Tags', result.tags.join(' · ') || 'NA', false]
        ]

        return client.sendembed(
            message.channel, 
            'Result For ' + result.title, 
            client.user.avatarURL, 
            TD.turndown(result.excerpt) || 'NA', 
            fields, 
            '#078400', 
            false
        )
    })
}

/** create a search query by joining all args 
 * @param {Array} argArr
*/

const createSearchQuery = argArr => {
    argArr.shift();
    return argArr.join(' ')
}