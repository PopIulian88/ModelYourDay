import { ModelModel } from "../../models";
import { Images } from "../images";

export const models: ModelModel[] = [
  {
    name: "Andrew Tate",
    description:
      "American-British social media personality, businessman, kickbox world champion",
    image: Images.topG,
    currentActivity: "Working out",
    strike: 0,
    motivation: [
      "The only way to get what you want is to deserve what you want.",
      "What you think of yourself is much more important than what others think of you.",
    ],
    meals: {
      monday: {
        hasMeals: true,
        meals: [
          ["Rice again alongside chicken or buffalo", "Protein shake"],
          ["Chicken soup", "A hole cow with rice", "Small snack"],
        ],
      },
      tuesday: {
        hasMeals: false,
      },
      wednesday: {
        hasMeals: true,
        meals: [["Rice again alongside chicken or buffalo", "Protein shake"]],
      },
      thursday: {
        hasMeals: false,
      },
      friday: {
        hasMeals: true,
        meals: [
          ["Rice again alongside chicken or buffalo", "Protein shake"],
          ["Chicken soup", "A hole cow with rice", "Small snack"],
        ],
      },
      saturday: {
        hasMeals: false,
      },
      sunday: {
        hasMeals: true,
        meals: [["Rice again alongside chicken or buffalo", "Protein shake"]],
      },
    },
    freeTime: [
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
    ],
    training: {
      monday: {
        hasTraining: true,
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      tuesday: {
        hasTraining: false,
      },
      wednesday: {
        hasTraining: true,
        trainings: [["Shoulders", "Arms"]],
      },
      thursday: {
        hasTraining: false,
      },
      friday: {
        hasTraining: true,
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      saturday: {
        hasTraining: false,
      },
      sunday: {
        hasTraining: true,
        trainings: [["Chest", "Back", "Legs"]],
      },
    },
    // 7 for each day of the week
    challenges: [
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
    ],
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
    },
  },
  {
    name: "Dwayne Johnson",
    description:
      "American-Canadian actor, producer, businessman, retired professional wrestler",
    image: Images.dwayneJohnson,
    currentActivity: "Filming",
    strike: 6,
    motivation: [
      "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
      "If everyone is moving forward together, then success takes care of itself.",
    ],
    meals: {
      monday: {
        hasMeals: true,
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      tuesday: {
        hasMeals: false,
      },
      wednesday: {
        hasMeals: true,
        meals: [["Protein shake", "Chicken salad"]],
      },
      thursday: {
        hasMeals: false,
      },
      friday: {
        hasMeals: true,
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      saturday: {
        hasMeals: false,
      },
      sunday: {
        hasMeals: true,
        meals: [["Protein shake", "Chicken salad"]],
      },
    },
    freeTime: [
      ["Working out", "Traveling", "Spending time with family"],
      ["Working out", "Traveling", "Spending time with family"],
      ["Working out", "Traveling", "Spending time with family"],
    ],
    training: {
      monday: {
        hasTraining: true,
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      tuesday: {
        hasTraining: false,
      },
      wednesday: {
        hasTraining: true,
        trainings: [["Shoulders", "Arms"]],
      },
      thursday: {
        hasTraining: false,
      },
      friday: {
        hasTraining: true,
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      saturday: {
        hasTraining: false,
      },
      sunday: {
        hasTraining: true,
        trainings: [["Chest", "Back", "Legs"]],
      },
    },
    // 7 for each day of the week
    challenges: [
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
      {
        food: "Eat 5000 Calories",
        gym: "Workout 2 times a day",
        freeTime: "No social media",
      },
    ],
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
    },
  },
  {
    name: "Elon Musk",
    description:
      "Businessman and investor known for his key roles in space company SpaceX and automotive company Tesla",
    image: Images.elonMusk,
    currentActivity: "In space",
    strike: 0,
    motivation: [
      "When something is important enough, you do it even if the odds are not in your favor.",
      "Failure is an option here. If things are not failing, you are not innovating enough.",
    ],
    meals: {
      monday: {
        hasMeals: true,
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      tuesday: {
        hasMeals: false,
      },
      wednesday: {
        hasMeals: true,
        meals: [["Protein shake", "Chicken salad"]],
      },
      thursday: {
        hasMeals: false,
      },
      friday: {
        hasMeals: true,
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      saturday: {
        hasMeals: false,
      },
      sunday: {
        hasMeals: true,
        meals: [["Protein shake", "Chicken salad"]],
      },
    },
    freeTime: [
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
      ["Reading", "Working out", "Traveling"],
    ],
    training: {
      monday: {
        hasTraining: true,
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      tuesday: {
        hasTraining: false,
      },
      wednesday: {
        hasTraining: true,
        trainings: [["Shoulders", "Arms"]],
      },
      thursday: {
        hasTraining: false,
      },
      friday: {
        hasTraining: true,
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      saturday: {
        hasTraining: false,
      },
      sunday: {
        hasTraining: true,
        trainings: [["Chest", "Back", "Legs"]],
      },
    },
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
    },
  },
  {
    name: "AI",
    description: "Find using AI",
    image: Images.money,
    currentActivity: "Calculating",
    strike: 0,
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
    },
  },
];
