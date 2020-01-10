const Discord = require("discord.js");
const app = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

app.on("ready", () => {
    console.log("Bot has been activated");
    app.user.setActivity("use ~~help");
});


app.on("message", message=> {
    if(message.author.bot) return;
    const guildMember = message.member;
    if(message.member.roles.find(r => r.name === "The Boys") || (message.member.roles.find(r => r.name === "The New Avengers") || (message.member.roles.find(r => r.name === 'Millwall F.C.')))){
        //yikes chief
        if (message.content.includes("yikes")) {
            message.channel.send("" , {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/165240726630825984/537039150256226324/unknown.png",
                    }
                }
            })
        }
        //WoOoOoW
        if (message.content.includes("wow")) {
            message.channel.send("WoOoOoOoW");
        }

        //jason array, things are gonna get messy
        if (message.content.toLowerCase() == "jason") {
            const rando_imgs = [
                `https://cdn.discordapp.com/attachments/166628347454029824/537032354745810944/10268440_1030893183602043_8260867880999830301_n.png`,
                `https://cdn.discordapp.com/attachments/165240726630825984/537032418830450699/Screenshot_2018-12-29-18-35-02.png`,
                `https://i.imgur.com/g5clXhi.png`,
                `https://cdn.discordapp.com/attachments/165240726630825984/537032562279972884/Screenshot_2018-11-26-01-23-19.png`,
                `https://cdn.discordapp.com/attachments/165240726630825984/537032695151198219/Screenshot_2018-11-02-23-20-35.png`,
                `https://cdn.discordapp.com/attachments/165240726630825984/537032788487176222/Screenshot_2018-10-28-04-20-27.png`,
                `https://cdn.discordapp.com/attachments/180410677498740736/537032857688735744/image1.jpg`,
                `https://cdn.discordapp.com/attachments/180410677498740736/537032857688735745/image0.jpg`,
                `https://cdn.discordapp.com/attachments/180410677498740736/537034468003807252/image1.jpg`,
                `https://cdn.discordapp.com/attachments/180410677498740736/537034468003807253/image0.jpg`,
                `https://i.imgur.com/a02vzD6.jpg`,
                `https://i.imgur.com/YNsY3XM.png`,
                `https://i.imgur.com/17EcHFU.jpg`,
                `https://i.imgur.com/0nKoutG.png`,
                `https://i.imgur.com/RhVhwFW.png`,
                `https://i.imgur.com/NwyaY4p.png`,
            ]
            message.channel.send(`Its Jason!`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
        }

        if (message.content.indexOf(config.prefix) !==0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        try {
            let commandFile = require(`./commands/${command}.js`);
            commandFile.run(app, message, args);
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("Some cunt tried to use a command without permission. " + message.member.displayName + " " + message.author.id);
    }
});

//fetches bot token from config file
app.login(config.token);