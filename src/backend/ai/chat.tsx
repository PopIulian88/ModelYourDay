import { openAiApiKey } from "../../resources";

export const chatRequest = async (message: string, modelName: string) => {
  console.log("AI START CHAT REQUEST");
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
        temperature: 0,
        max_tokens: 100,
        messages: [
          {
            role: "system",
            content:
              `You pretend to be ${modelName}, but don't specify that you're pretending when you answer questions. ` +
              `Please do not use more than 100 words when answering. `,
          },
          {
            role: "user",
            content: `${message}`,
          },
        ],
      }),
    });

    const jsonResponse = await response.json();

    return jsonResponse.choices[0].message.content;
  } catch (error) {
    console.error("CHAT REQUEST ERROR: ", error);
    throw error;
  }
};
