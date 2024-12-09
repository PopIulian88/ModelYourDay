import { openAiApiKey } from "../../../resources";

export const generateModelDescription: (
  modelName: string,
) => Promise<string> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL DESCRIPTION REQUEST");
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
        temperature: 0,
        max_tokens: 100,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that extracts data and returns it in JSON format.`,
          },
        ],
        functions: [
          {
            name: "generate_model_description",
            // description: "Description of the function",
            parameters: {
              type: "object",
              properties: {
                param_description: {
                  type: "string",
                  description: `Describe ${modelName}, but dont use the name of the model`,
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
        .param_description ??
      "Highly influential and admired, models embody style, grace, and professionalism, showcasing creativity and talent."
    );
  } catch (error) {
    console.error("Description request error: ", error);
    return "Highly influential and admired, models embody style, grace, and professionalism, showcasing creativity and talent.";
  }
};
