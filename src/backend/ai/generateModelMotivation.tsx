import { openAiApiKey } from "../../resources";

export const generateModelMotivation: (
  modelName: string,
) => Promise<string> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL MOTIVATION ACTIVITY REQUEST");
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
        // temperature: 0,
        max_tokens: 200,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that extracts data and returns it separated by ;.`,
          },
          {
            role: "user",
            content: `Using ${modelName}, generate between 2 and 5 concise motivational messages, each no longer than 50 words. Separate each message with a semicolon.`,
          },
        ],
      }),
    });

    const jsonResponse = await response.json();

    // Split the messages by the semicolon
    return jsonResponse.choices?.[0]?.message?.content?.split(";") ?? undefined;
  } catch (error) {
    console.error("ModelMotivation request error: ", error);
    return undefined;
  }
};
