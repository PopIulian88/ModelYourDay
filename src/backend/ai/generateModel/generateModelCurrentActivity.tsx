import { openAiApiKey } from "../../../resources";

export const generateModelCurrentActivity: (
  modelName: string,
) => Promise<string> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL CURRENT ACTIVITY REQUEST");
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-1106",
        max_tokens: 100,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that extracts data and returns it in JSON format.`,
          },
        ],
        functions: [
          {
            name: "generate_model_current_activity",
            parameters: {
              type: "object",
              properties: {
                param_current_activity: {
                  type: "string",
                  description: `What is ${modelName} doing now? In 2 words maximum. Don't use the name of the model. If the model is dead return "among the stars"`,
                },
              },
            },
          },
        ],
        function_call: "auto",
      }),
    });

    const jsonResponse = await response.json();

    return (
      JSON.parse(jsonResponse?.choices?.[0].message?.function_call?.arguments)
        .param_current_activity ?? "Working"
    );
  } catch (error) {
    console.error("CurrentActivity request error: ", error);
    return "Working";
  }
};
