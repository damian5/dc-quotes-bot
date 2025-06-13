import { ChatInputCommandInteraction } from "discord.js";
import type { Quote } from "../types";
import { fetchAllQuotes } from "../service/quotes";
import { reply } from "../utils/reply";

let lastQuote: string | null = null;

export const getQuote = async (interaction: ChatInputCommandInteraction) => {
  console.log("Channel id", interaction.channelId);

  try {
    const quotes: Quote[] = await fetchAllQuotes();
    if (!quotes.length) {
      return reply(
        interaction,
        "No quotes available, add one using the /add command"
      );
    }
    const quotesWithoutLastQuote = quotes.filter((q) => q.id !== lastQuote);
    const randomNumber = Math.floor(
      Math.random() * quotesWithoutLastQuote.length
    );
    const quote = quotesWithoutLastQuote[randomNumber];
    lastQuote = quote.id;

    reply(interaction, quote.text);
  } catch (error) {
    console.log("Error retreiving a quote", error);
    reply(interaction, "There was an error retreiving a quote");
  }
};
