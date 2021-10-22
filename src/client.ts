import "reflect-metadata";
import path from "path";
import { Intents, Interaction, Message } from "discord.js";
import { Client } from "discordx";

//Mallard's Server 900832030173044747
//Sauce or loss 830840892301770752

var cntToReply : number = 0;

const client = new Client({
	simpleCommand: {
		prefix: "!",
	},
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
	classes: [
		path.join(__dirname, "commands", "**/*.{ts,js}"),
	],
	//botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
	botGuilds: ["900832030173044747", "830840892301770752"],
	silent: true,
	
});

client.once("ready", async () => {
	await client.initApplicationCommands({
		guild: { log: true },
		global: { log: true },
	});
	await client.initApplicationPermissions();
	
	console.log("Bot started");
});

client.on("interactionCreate", (interaction: Interaction) => {
	client.executeInteraction(interaction);
});

client.on("message", async (message : Message) => {
	if (message.author.id != "900833590919704628") {
		cntToReply += 1;
		if (cntToReply >= 5) {
			cntToReply = 0;
			message.reply("?");
		}
	}
});

client.login(process.env.BOT_TOKEN ?? ""); // provide your bot token
