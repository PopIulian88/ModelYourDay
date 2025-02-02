import OpenAI from "openai";
import { openAiApiKey } from "../../../resources";

export const generateModelImage = async (name: string | undefined) => {
  console.log("Generating model image for", name);

  if (!name) {
    console.error("No name provided for generating model image");
    return undefined;
  }

  const openai = new OpenAI({
    apiKey: openAiApiKey,
  });

  try {
    const response = await openai.images.generate({
      prompt: `A cover image for ${name}`,
      n: 1,
      size: "1792x1024",
      model: "dall-e-3",
    });

    return response.data[0].url;
  } catch (error) {
    console.error("Error generating model image", error);
  }
};
