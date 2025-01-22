import { openAiApiKey } from "../../../resources";
import { ModelChallengeModel } from "../../../models";

export const generateModelChallenges: (
  modelName: string,
) => Promise<ModelChallengeModel> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL CHALLENGES REQUEST");
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4-turbo-preview",
        max_tokens: 200,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that extracts data and returns it separated by ;.`,
          },
          {
            role: "user",
            content: `Using ${modelName}, generate 3 daily challenges, each no longer than 20 words. The first challenge is about food, the second challenge is about gym and the third challenge is about free time. Separate each message with a semicolon.`,
          },
        ],
      }),
    });

    const jsonResponse = await response.json();

    const challengeList =
      jsonResponse.choices?.[0]?.message?.content?.split(";") ?? [];

    return {
      food: challengeList[0] ?? "Unknown",
      gym: challengeList[1] ?? "Unknown",
      freeTime: challengeList[2] ?? "Unknown",
    };
  } catch (error) {
    console.error("fetchModelChallenges error: ", error);
    return {
      food: "Unknown",
      gym: "Unknown",
      freeTime: "Unknown",
    };
  }
};
