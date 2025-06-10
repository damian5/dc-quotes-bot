import "dotenv/config";

import { ChatInputCommandInteraction, Routes, User } from "discord.js";
import { getQuote, addQuote, getLatency } from "./controller/index";
import { getAllQuotes } from "./controller/getAllQuotes";
import { deleteQuote } from "./controller/deleteQuote";
import { client } from "./service/client";
import { initBot } from "./service/initBot";

initBot();

const commandHandlers: Record<
  string,
  (interaction: ChatInputCommandInteraction) => Promise<void> | void
> = {
  ping: getLatency,
  quote: getQuote,
  add: addQuote,
  list: getAllQuotes,
  delete: deleteQuote,
};

client.once("ready", () => {
  console.log(`Logged in as ${(client.user as User).tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const commandInteraction = interaction as ChatInputCommandInteraction;

  const handler = commandHandlers[interaction.commandName];

  if (handler) {
    await handler(commandInteraction);
  } else {
    await commandInteraction.reply("This command doesn't exist");
  }
});
