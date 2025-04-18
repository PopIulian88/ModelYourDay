import { ModelTrainingModel } from "../../../models";
import { openAiApiKey } from "../../../resources";

export const generateModelTrainings: (
  modelName: string,
) => Promise<ModelTrainingModel> = async (modelName: string) => {
  console.log("AI START GENERATE MODEL TRAINING REQUEST");

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
            content: `You are a helpful assistant that extracts training data and returns it in JSON format.`,
          },
        ],
        functions: [
          {
            name: "generate_model_trainings",
            parameters: {
              type: "object",
              properties: {
                param_days: {
                  type: "object",
                  properties: {
                    monday: {
                      type: "string",
                      description: `What does ${modelName} train on Monday? Provide training sessions separated by semicolons, and exercises within sessions separated by commas. Return examples: "chest,triceps" or "chest,triceps;cardio" if it has multiple workouts a day or "yoga;pilates" if the user doesn't go to the gym. If the model is not training return "rest"`,
                    },
                    tuesday: {
                      type: "string",
                      description: `What does ${modelName} train on Tuesday? Same format.`,
                    },
                    wednesday: {
                      type: "string",
                      description: `What does ${modelName} train on Wednesday? Same format.`,
                    },
                    thursday: {
                      type: "string",
                      description: `What does ${modelName} train on Thursday? Same format.`,
                    },
                    friday: {
                      type: "string",
                      description: `What does ${modelName} train on Friday? Same format.`,
                    },
                    saturday: {
                      type: "string",
                      description: `What does ${modelName} train on Saturday? Same format.`,
                    },
                    sunday: {
                      type: "string",
                      description: `What does ${modelName} train on Sunday? Same format.`,
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
    const rawTrainings = JSON.parse(
      jsonResponse?.choices?.[0].message?.function_call?.arguments ?? "{}",
    );

    const parseTrainings = (dayString: string) => {
      if (!dayString) return [];
      return dayString
        .split(";")
        .map((session) =>
          session.split(",").map((exercise) => exercise.trim()),
        );
    };

    const modelTrainings = {
      monday: {
        trainings: parseTrainings(rawTrainings.param_days?.monday) ?? [],
      },
      tuesday: {
        trainings: parseTrainings(rawTrainings.param_days?.tuesday) ?? [],
      },
      wednesday: {
        trainings: parseTrainings(rawTrainings.param_days?.wednesday) ?? [],
      },
      thursday: {
        trainings: parseTrainings(rawTrainings.param_days?.thursday) ?? [],
      },
      friday: {
        trainings: parseTrainings(rawTrainings.param_days?.friday) ?? [],
      },
      saturday: {
        trainings: parseTrainings(rawTrainings.param_days?.saturday) ?? [],
      },
      sunday: {
        trainings: parseTrainings(rawTrainings.param_days?.sunday) ?? [],
      },
      lastUpdated: new Date().toISOString().slice(0, 10),
    };

    return modelTrainings;
  } catch (error) {
    console.error("fetchModelTrainings error: ", error);
    return {
      monday: { trainings: [] },
      tuesday: { trainings: [] },
      wednesday: { trainings: [] },
      thursday: { trainings: [] },
      friday: { trainings: [] },
      saturday: { trainings: [] },
      sunday: { trainings: [] },
      lastUpdated: new Date().toISOString().slice(0, 10),
    };
  }
};
