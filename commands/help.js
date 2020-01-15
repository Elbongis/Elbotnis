exports.run = (client, message, args) => {
	message.channel.send({embed: {
    color: 0x33FCFF,
    author: {
      name: "Elbotnis",
      icon_url: client.user.avatarURL
    },
    title: "Commands:",
    description: "Below are the current commands the bot has implemented, along with their usage.",
    thumbnail: {
        "url": "https://imgur.com/lbIHWQA"
      },
    fields: [{
        name: "$help",
        value: "Displays this message. | Usage: $help"
      },
      {
        name: "$ping",
        value: "Pings the bot. | Usage: $ping"
      },
      {
        name: "$reload",
        value: "Reloads a command. | Usage: $reload [command]"
      },
      {
        name: "$info",
        value: "Gets info on a user. | Usage: $info @[user]"
      },
      {
        name: "$minecraft",
        value: "Shows the current MC IP. | Usage: $minecraft"
      },
    ],
    footer: {
      icon_url: client.user.avatarURL
    }
  }
});
}