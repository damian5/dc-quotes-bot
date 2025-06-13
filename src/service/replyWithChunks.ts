import { ChatInputCommandInteraction } from "discord.js";

export const sendChunks = async (
  interaction: ChatInputCommandInteraction,
  fullText: string
) => {
  const chunks: string[] = [];

  // Discord messages must be ≤ 2000 chars
  while (fullText.length > 0) {
    let sliceEnd = Math.min(fullText.length, 1990);
    const slice = fullText.slice(0, sliceEnd);
    chunks.push(slice);

    fullText = fullText.slice(sliceEnd);
  }

  await interaction.reply(chunks[0]);
  for (let i = 1; i < chunks.length; i++) {
    await interaction.followUp(chunks[i]);
  }
};
