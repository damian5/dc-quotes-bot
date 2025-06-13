import { ChatInputCommandInteraction } from "discord.js";
import type { Quote } from "../types";
import { reply } from "../utils/reply";
import { isAdmin } from "../utils/isAdmin";
import { fetchAllQuotes } from "../service/quotes";
import { sendChunks } from "../service/replyWithChunks";

const MAX_QUOTE_LENGTH = 45;

const createTable = (quotes: Quote[]) => {
  let quoteHeaderLength = 0;
  for (const singleQuote of quotes) {
    const wordLength = singleQuote.text.length;
    if (wordLength > quoteHeaderLength) {
      quoteHeaderLength = wordLength;
    }
  }
  if (quoteHeaderLength > MAX_QUOTE_LENGTH) {
    quoteHeaderLength = MAX_QUOTE_LENGTH;
  }

  let table = "";

  for (const singleQuote of quotes) {
    const shortened =
      singleQuote.text.length > MAX_QUOTE_LENGTH
        ? singleQuote.text.slice(0, MAX_QUOTE_LENGTH - 3) + "..."
        : singleQuote.text;
    table += `${singleQuote.id} ---> ${shortened}\n`;
  }

  return table;
};

export const getAllQuotes = async (
  interaction: ChatInputCommandInteraction
) => {
  const quotes = await fetchAllQuotes();

  if (!isAdmin(interaction.memberPermissions)) {
    return reply(interaction, "You need admin privileges to see all quotes");
  }

  if (!quotes.length) {
    return reply(
      interaction,
      "No quotes available, add one using the /add command"
    );
  }

  const table = createTable(quotes);
  sendChunks(interaction, table);
};
