import { Interaction } from "discord.js";

export const reply = (interaction: Interaction, message: string) => {
  if (interaction.isRepliable()) {
    interaction.reply(message);
  }
};
