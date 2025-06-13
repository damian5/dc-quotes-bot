import {
  InteractionContextType,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";

export const ping = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Pings the bot and shows the latency")
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const quote = new SlashCommandBuilder()
  .setName("quote")
  .setDescription("Retreive a quote");

export const list = new SlashCommandBuilder()
  .setName("list")
  .setDescription("Retreive all the quotes")
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
  .setContexts(InteractionContextType.Guild);

export const addQuote = new SlashCommandBuilder()
  .setName("add")
  .setDescription("Adds a new quote")
  .addStringOption((option) =>
    option.setName("quote").setDescription("The quote to add").setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
  .setContexts(InteractionContextType.Guild);

export const deleteQuote = new SlashCommandBuilder()
  .setName("delete")
  .setDescription("Deletes a quote by ID")
  .addStringOption((option) =>
    option
      .setName("id")
      .setDescription("The ID of the quote to delete")
      .setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
  .setContexts(InteractionContextType.Guild);

export const commands = [ping, quote, addQuote, list, deleteQuote];
