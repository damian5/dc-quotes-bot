import { execSync } from "child_process";
import { createInterface } from "node:readline";
import { commands } from "../utils/commands";
import { client } from "./client";
import { Routes, type User } from "discord.js";
import { registerCommands } from "./registerCommands";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const question = (q: string) =>
  new Promise((resolve) => rl.question(q, resolve));

export const initBot = async () => {
  const BOT_TOKEN = process.env.DC_TOKEN_BOT;
  if (!BOT_TOKEN) throw new Error("Invalid token");

  const ratelimitTest = await fetch(
    `https://discord.com/api/v9/invites/discord-developers`
  );

  if (!ratelimitTest.ok) {
    await question(
      `Uh oh, looks like the node you're on is currently being blocked by Discord. Press the "Enter" button on your keyboard to be reassigned to a new node. (you'll need to rerun the program once you reconnect)`
    );
    execSync("kill 1");
    return;
  }
  await client.login(BOT_TOKEN);
  await registerCommands();

  console.log("Bot is online and commands are registered.");
};
