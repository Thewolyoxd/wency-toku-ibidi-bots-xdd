const Command = require("../base/Command.js");
const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")
moment.locale("tr")
class Uptime extends Command {
    constructor(client) {
        super(client, {
            name: "uptime",
            aliases: ["uptime"]
        });
    }

    async run(message, args, data) {
        if (message.author.id !== "310779453464772608") return
        let up = moment.duration(this.client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        message.channel.send("Bot " + up + " önce çalışmaya başladı.")
    }
}

module.exports = Uptime;
