import { openAiApiKey } from "../../../resources";

export const generateModelFreeTime: (
  modelName: string,
) => Promise<string[][]> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL FREE TIME REQUEST");
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
        max_tokens: 100,
        messages: [
          {
            role: "user",
            content: `Generate multiple lists of activities that ${modelName} would do. Separate lists with ; and sublists with , . Do not add additional headers`,
          },
        ],
      }),
    });

    const jsonResponse = await response.json();

    const rawFreeTime =
      jsonResponse.choices?.[0]?.message?.content?.split(";") ?? [];
    const freeTimeList: string[][] =
      rawFreeTime.map((row: string) => row.split(",")) ?? [];

    return freeTimeList ?? [];
  } catch (error) {
    console.error("VERIFY NAME REQUEST ERROR: ", error);
    return [];
  }
};
