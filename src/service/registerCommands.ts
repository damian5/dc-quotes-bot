import { Routes, User } from "discord.js";
import { client } from "./client";
import { commands } from "../utils/commands";

export const registerCommands = async () => {
  const appId = (client.user as User).id;
  await client.rest.put(Routes.applicationCommands(appId), {
    body: commands.map((cmd) => cmd.toJSON()),
  });

  console.log("Application commands registered.");
};
