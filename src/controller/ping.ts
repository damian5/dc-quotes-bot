import { ChatInputCommandInteraction } from "discord.js";
import { reply } from "../utils/reply";
import { client } from "../service/client";

export const getLatency = (interaction: ChatInputCommandInteraction) => {
  console.log(interaction);
  reply(
    interaction,
    `Latency is ${
      Date.now() - interaction.createdTimestamp
    }ms. API Latency is ${Math.round(client.ws.ping)}ms`
  );
};
