import { openAiApiKey } from "../../../resources";
import { ModelMealModel } from "../../../models";

export const generateModelMeals: (
  modelName: string,
) => Promise<ModelMealModel> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL MEALS REQUEST");
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
        max_tokens: 1000,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that extracts data and returns it in JSON format.`,
          },
        ],
        functions: [
          {
            name: "generate_model_meals",
            parameters: {
              type: "object",
              properties: {
                param_days: {
                  type: "object",
                  properties: {
                    monday: {
                      type: "string",
                      description: `What does ${modelName} eat on Monday? Provide meals separated by semicolons, and dishes within meals separated by commas. Return example: "Scrambled eggs,Apple;Vegetable soup,Chicken with rice,Protein shake;Forehead salad".`,
                    },
                    tuesday: {
                      type: "string",
                      description: `What does ${modelName} eat on Tuesday? Same format.`,
                    },
                    wednesday: {
                      type: "string",
                      description: `What does ${modelName} eat on Wednesday? Same format.`,
                    },
                    thursday: {
                      type: "string",
                      description: `What does ${modelName} eat on Thursday? Same format.`,
                    },
                    friday: {
                      type: "string",
                      description: `What does ${modelName} eat on Friday? Same format.`,
                    },
                    saturday: {
                      type: "string",
                      description: `What does ${modelName} eat on Saturday? Same format.`,
                    },
                    sunday: {
                      type: "string",
                      description: `What does ${modelName} eat on Sunday? Same format.`,
                    },
                  },
                },
              },
            },
          },
        ],
        function_call: "auto",
      }),
    });

    const jsonResponse = await response.json();
    const rawMeals = JSON.parse(
      jsonResponse?.choices?.[0].message?.function_call?.arguments ?? "{}",
    );

    const parseMeals = (dayString: string) => {
      if (!dayString) return [];
      return dayString
        .split(";")
        .map((meal) => meal.split(",").map((dish) => dish.trim()));
    };

    const modelMeals = {
      monday: { meals: parseMeals(rawMeals.param_days?.monday) ?? [] },
      tuesday: { meals: parseMeals(rawMeals.param_days?.tuesday) ?? [] },
      wednesday: { meals: parseMeals(rawMeals.param_days?.wednesday) ?? [] },
      thursday: { meals: parseMeals(rawMeals.param_days?.thursday) ?? [] },
      friday: { meals: parseMeals(rawMeals.param_days?.friday) ?? [] },
      saturday: { meals: parseMeals(rawMeals.param_days?.saturday) ?? [] },
      sunday: { meals: parseMeals(rawMeals.param_days?.sunday) ?? [] },
      lastUpdated: new Date().toISOString().slice(0, 10),
    };

    return modelMeals;
  } catch (error) {
    console.error("fetchModelMeals error: ", error);
    return {
      monday: { meals: [] },
      tuesday: { meals: [] },
      wednesday: { meals: [] },
      thursday: { meals: [] },
      friday: { meals: [] },
      saturday: { meals: [] },
      sunday: { meals: [] },
      lastUpdated: new Date().toISOString().slice(0, 10),
    };
  }
};
