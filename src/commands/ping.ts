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

    @Guild("900832030173044747")
    @Slash("stack")
    search_stack(
        @SlashOption("search-term", {description : "Search term for stack overflow"})
        searchTerm : string,
        interaction: CommandInteraction
    ) {
        let term = searchTerm.replaceAll(" ", "+");
        interaction.reply("https://stackoverflow.com/search?q=" + term);
    }
}