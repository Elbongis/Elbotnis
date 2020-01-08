exports.run = (app, message, args) => {
    try {
        if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
        delete require.cache[require.resolve(`./${args}.js`)];
        message.reply(`The command ${args[0]} has been reloaded`);
    } catch (err) {
        message.reply("Sorry, you must enter an actual command.");
        console.log(err);
    }
}