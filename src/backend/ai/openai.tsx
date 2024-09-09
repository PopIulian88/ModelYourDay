import OpenAI from "openai";

export const handleRequest = async (prompt: string) => {
  console.log(process.env.AI_KEY);
  const openai = new OpenAI({
    apiKey: process.env.AI_KEY || "",
  });
  console.log("AI STARTED");
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: "You are a helpful assistant.",
    //TODO: May need to chenge to this
    // messages: [
    //   {
    //     role: "user",
    //     content: {
    //       type: "text",
    //       text: "You are a helpful assistant.",
    //     },
    //   },
    // ],
  });
  console.log("AI FINISHED: ", response.choices[0].text);
  return response.choices[0].text;
};
