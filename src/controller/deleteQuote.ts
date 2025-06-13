import { ChatInputCommandInteraction } from "discord.js";
import { isAdmin } from "../utils/isAdmin";
import { reply } from "../utils/reply";
import { deleteQuoteById, fetchQuoteById } from "../service/quotes";
import { DBError } from "../types";

export const deleteQuote = async (interaction: ChatInputCommandInteraction) => {
  if (!isAdmin(interaction.memberPermissions)) {
    return reply(interaction, "You need admin privileges to delete quotes");
  }

  const quoteIdToDelete = interaction.options.get("id", true).value as string;

  try {
    await fetchQuoteById(quoteIdToDelete);
  } catch (error: unknown) {
    const message =
      (error as DBError).code === "22P02"
        ? "Invalid id"
        : `The quote with id ${quoteIdToDelete} does not exist`;
    console.log("Error finding quote by id", error);
    reply(interaction, message);
    return;
  }

  try {
    await deleteQuoteById(quoteIdToDelete);
  } catch (error) {
    console.error("Error deleting a quote", error);
    interaction.user.id;
    reply(
      interaction,
      "There was an error deleting the quote, try again later."
    );
  }

  reply(interaction, `A quote has been successfully deleted`);
};
