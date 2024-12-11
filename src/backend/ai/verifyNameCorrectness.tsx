import { openAiApiKey } from "../../resources";

// When use, verify is the response is "FAIL" to show an error message
export const verifyNameCorrectness = async (modelName: string) => {
  console.log("AI START VERIFY NAME CORRECTNESS REQUEST");
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
            content: `Please do not use more than 3 words when answering.`,
          },
          {
            role: "user",
            content:
              `Check if you know a public figure named ${modelName}.` +
              `If it is misspelled or there is a person, write only the correct name, no extra names.` +
              `If you can't find it, write FAIL.`,
          },
        ],
      }),
    });

    const jsonResponse = await response.json();

    return jsonResponse.choices?.[0]?.message?.content ?? "FAIL";
  } catch (error) {
    console.error("VERIFY NAME REQUEST ERROR: ", error);
    return "FAIL";
  }
};
