exports.run = (app, message, args) => {
    const mc = app.emojis.find(emoji => emoji.name === "minecraft");
    message.channel.send(`${mc} hobknocker.serverminer.com - 1.15.1 - Vanilla`)
}