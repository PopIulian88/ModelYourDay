import { openAiApiKey } from "../../resources";

export const getPersonalityRequest = async (personality: string) => {
  console.log("AI START PERSONALITY REQUEST");
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
          // {
          //   role: "system",
          //   content: `You are a programmer`,
          // },
          {
            role: "user",
            content: `Descrie ${personality} in 2 cuvinte`,
          },
        ],
      }),
    });

    const jsonResponse = await response.json();

    return jsonResponse.choices[0].message.content;
  } catch (error) {
    console.log("PERSONALITY REQUEST ERROR: ", error);
    return "ERROR: SOMETHING WENT WRONG";
  }
};
