import { Interaction } from "discord.js";

export const isAdmin = (memberPermissions: Interaction["memberPermissions"]) =>
  memberPermissions?.has("Administrator");
