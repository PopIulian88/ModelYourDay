import { ModelModel } from "../../models";
import { Images } from "../images";

export const models: ModelModel[] = [
  {
    id: "1", // Fake ID - Should be generated
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
        meals: [
          ["Rice again alongside chicken or buffalo", "Protein shake"],
          ["Chicken soup", "A hole cow with rice", "Small snack"],
        ],
      },
      tuesday: {},
      wednesday: {
        meals: [["Rice again alongside chicken or buffalo", "Protein shake"]],
      },
      thursday: {},
      friday: {
        meals: [
          ["Rice again alongside chicken or buffalo", "Protein shake"],
          ["Chicken soup", "A hole cow with rice", "Small snack"],
        ],
      },
      saturday: {},
      sunday: {
        meals: [["Rice again alongside chicken or buffalo", "Protein shake"]],
      },
      lastUpdated: "2021-07-01",
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
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      tuesday: {},
      wednesday: {
        trainings: [["Shoulders", "Arms"]],
      },
      thursday: {},
      friday: {
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      saturday: {},
      sunday: {
        trainings: [["Chest", "Back", "Legs"]],
      },
      lastUpdated: "2021-07-01",
    },
    challenges: {
      monday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      tuesday: {},
      wednesday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      thursday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      friday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      saturday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      sunday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      lastUpdated: "2021-07-01",
    },
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
      lastUpdated: "2021-07-01",
    },
  },
  {
    id: "2", // Fake ID - Should be generated
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
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      tuesday: {},
      wednesday: {
        meals: [["Protein shake", "Chicken salad"]],
      },
      thursday: {},
      friday: {
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      saturday: {},
      sunday: {
        meals: [["Protein shake", "Chicken salad"]],
      },
      lastUpdated: "2021-07-01",
    },
    freeTime: [
      ["Working out", "Traveling", "Spending time with family"],
      ["Working out", "Traveling", "Spending time with family"],
      ["Working out", "Traveling", "Spending time with family"],
    ],
    training: {
      monday: {
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      tuesday: {},
      wednesday: {
        trainings: [["Shoulders", "Arms"]],
      },
      thursday: {},
      friday: {
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      saturday: {},
      sunday: {
        trainings: [["Chest", "Back", "Legs"]],
      },
      lastUpdated: "2021-07-01",
    },
    challenges: {
      monday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      tuesday: {},
      wednesday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      thursday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      friday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      saturday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      sunday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      lastUpdated: "2021-07-01",
    },
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
      lastUpdated: "2021-07-01",
    },
  },
  {
    id: "3", // Fake ID - Should be generated
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
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      tuesday: {},
      wednesday: {
        meals: [["Protein shake", "Chicken salad"]],
      },
      thursday: {},
      friday: {
        meals: [
          ["Protein shake", "Chicken salad"],
          ["Steak", "Broccoli"],
        ],
      },
      saturday: {},
      sunday: {
        meals: [["Protein shake", "Chicken salad"]],
      },
      lastUpdated: "2021-07-01",
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
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      tuesday: {},
      wednesday: {
        trainings: [["Shoulders", "Arms"]],
      },
      thursday: {},
      friday: {
        trainings: [
          ["Chest", "Back", "Legs"],
          ["Shoulders", "Arms"],
        ],
      },
      saturday: {},
      sunday: {
        trainings: [["Chest", "Back", "Legs"]],
      },
      lastUpdated: "2021-07-01",
    },
    challenges: {
      monday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      tuesday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      wednesday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      thursday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      friday: {
        challenges: {
          food: "Eat 5000 Calories",
          gym: "Workout 2 times a day",
          freeTime: "No social media",
        },
      },
      saturday: {},
      sunday: {},
      lastUpdated: "2021-07-01",
    },
    // This will not be generated
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
      lastUpdated: "2021-07-01",
    },
  },
  {
    id: "4", // Fake ID - Should be generated
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
      lastUpdated: "2021-07-01",
    },
  },
];
