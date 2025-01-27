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

    const challenge1 = challengeList[0]
      ? challengeList[0]?.startsWith(" ")
        ? challengeList[0].trimStart()
        : challengeList[0]
      : "Unknown";

    const challenge2 = challengeList[1]
      ? challengeList[1].startsWith(" ")
        ? challengeList[1].trimStart()
        : challengeList[1]
      : "Unknown";

    const challenge3 = challengeList[2]
      ? challengeList[2].startsWith(" ")
        ? challengeList[2].trimStart()
        : challengeList[2]
      : "Unknown";

    return {
      food: challenge1,
      gym: challenge2,
      freeTime: challenge3,
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
