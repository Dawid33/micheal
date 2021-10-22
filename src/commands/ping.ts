import { CommandInteraction, MessageEmbed } from "discord.js";
import { Discord, MetadataStorage, Slash, SlashOption, SlashGroup, SlashChoice, Guild } from "discordx";
import { sendPaginatedEmbeds } from "@discordx/utilities";

@Discord()
export abstract class Ping {
    @Guild("900832030173044747")
    @Slash("ping")
    hello(
        interaction: CommandInteraction
    ) {
        interaction.reply("I have been pinged!");
    }
}