import { ModelChallengeModel } from "../../models";
import { openAiApiKey } from "../../resources";

// TODO: Cand facem acest call ar trebuiis a incercam sa il repetam pana la 3-5 ori in caz de eroare
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
        model: "gpt-3.5-turbo-1106",
        max_tokens: 1000,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that generates personalized challenges for a specific model.`,
          },
          {
            role: "user",
            content: `Generate challenges for each day of the week for the model "${modelName}". Include challenges for food, gym, and free time.`,
          },
        ],
        functions: [
          {
            name: "generate_model_challenges",
            parameters: {
              type: "object",
              properties: {
                param_days: {
                  type: "object",
                  properties: {
                    monday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Monday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Monday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Monday.`,
                        },
                      },
                    },
                    tuesday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Tuesday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Tuesday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Tuesday.`,
                        },
                      },
                    },
                    wednesday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Wednesday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Wednesday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Wednesday.`,
                        },
                      },
                    },
                    thursday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Thursday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Thursday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Thursday.`,
                        },
                      },
                    },
                    friday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Friday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Friday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Friday.`,
                        },
                      },
                    },
                    saturday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Saturday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Saturday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Saturday.`,
                        },
                      },
                    },
                    sunday: {
                      type: "object",
                      properties: {
                        food: {
                          type: "string",
                          description: `Food-related challenge for ${modelName} on Sunday.`,
                        },
                        gym: {
                          type: "string",
                          description: `Gym-related challenge for ${modelName} on Sunday.`,
                        },
                        freeTime: {
                          type: "string",
                          description: `Free time-related challenge for ${modelName} on Sunday.`,
                        },
                      },
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
    const rawChallenges = JSON.parse(
      jsonResponse?.choices?.[0].message?.function_call?.arguments ?? "{}",
    );

    const parseChallenges = (dayData: {
      food: string;
      gym: string;
      freeTime: string;
    }) => ({
      challenges: {
        food: dayData?.food ?? "FAIL",
        gym: dayData?.gym ?? "FAIL",
        freeTime: dayData?.freeTime ?? "FAIL",
      },
    });

    const modelChallenges: ModelChallengeModel = {
      monday: parseChallenges(rawChallenges.param_days?.monday),
      tuesday: parseChallenges(rawChallenges.param_days?.tuesday),
      wednesday: parseChallenges(rawChallenges.param_days?.wednesday),
      thursday: parseChallenges(rawChallenges.param_days?.thursday),
      friday: parseChallenges(rawChallenges.param_days?.friday),
      saturday: parseChallenges(rawChallenges.param_days?.saturday),
      sunday: parseChallenges(rawChallenges.param_days?.sunday),
      lastUpdated: new Date().toISOString(),
    };

    return modelChallenges;
  } catch (error) {
    console.error("fetchModelChallenges error: ", error);
    return {
      monday: { challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" } },
      tuesday: { challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" } },
      wednesday: {
        challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" },
      },
      thursday: { challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" } },
      friday: { challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" } },
      saturday: { challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" } },
      sunday: { challenges: { food: "FAIL", gym: "FAIL", freeTime: "FAIL" } },
      lastUpdated: new Date().toISOString(),
    };
  }
};
