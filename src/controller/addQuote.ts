import { ChatInputCommandInteraction } from "discord.js";
import { reply } from "../utils/reply";
import { isAdmin } from "../utils/isAdmin";
import { addQuote as addQuoteService } from "../service/quotes";

export const addQuote = async (interaction: ChatInputCommandInteraction) => {
  if (!isAdmin(interaction.memberPermissions)) {
    return reply(interaction, "You need admin privileges to add a quote");
  }

  const quoteToAdd = interaction.options.get("quote", true).value as string;

  try {
    await addQuoteService(quoteToAdd);
    if (interaction.isRepliable()) {
      reply(interaction, `The following quote has been added: "${quoteToAdd}"`);
    }
  } catch (error) {
    console.error("Error adding a quote", error);
    return reply(
      interaction,
      "There was an error adding a quote, please try again later"
    );
  }
};
