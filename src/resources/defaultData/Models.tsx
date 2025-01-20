import { ModelModel } from "../../models";
import { Images } from "../images";

export const models: ModelModel[] = [
  {
    id: "1", // Fake ID - Should be generated
    name: "Oprah Winfrey",
    description:
      "American talk show host, television producer, actress, author, and philanthropist",
    image: Images.oprahWinfrey,
    currentActivity: "Philanthropic initiatives",
    strike: 0,
    motivation: [
      "Turn your wounds into wisdom.",
      "The biggest adventure you can take is to live the life of your dreams.",
    ],
    meals: {
      monday: {
        meals: [
          ["Green smoothie", "Scrambled eggs with spinach"],
          ["Quinoa salad", "Grilled salmon with steamed broccoli"],
        ],
      },
      tuesday: {
        meals: [
          ["Oatmeal with fresh fruits", "Herbal tea"],
          ["Grilled chicken wrap", "Mixed green salad with vinaigrette"],
        ],
      },
      wednesday: {
        meals: [
          ["Avocado toast with poached eggs", "Fresh juice"],
          ["Vegetable stir-fry with tofu", "A handful of almonds"],
        ],
      },
      thursday: {
        meals: [
          ["Greek yogurt with granola", "Fruit smoothie"],
          ["Lentil soup", "Whole grain bread"],
        ],
      },
      friday: {
        meals: [
          ["Pancakes with honey", "Fresh berries"],
          ["Grilled shrimp with quinoa and roasted vegetables"],
        ],
      },
      saturday: {
        meals: [
          ["Egg white omelet with veggies", "Fresh orange juice"],
          ["Caprese salad", "Grilled chicken breast"],
        ],
      },
      sunday: {
        meals: [
          ["Chia pudding with coconut milk", "Banana slices"],
          ["Roast turkey with mashed sweet potatoes and green beans"],
        ],
      },
      lastUpdated: "2021-07-01",
    },
    freeTime: [
      ["Reading", "Gardening", "Yoga"],
      ["Meditation", "Writing", "Cooking"],
      ["Charity work", "Walking outdoors", "Listening to music"],
      ["Hosting events", "Photography", "Traveling"],
      ["Mindfulness practices", "Storytelling", "Exploring nature"],
      ["Journaling", "Cooking healthy meals", "Meeting friends"],
      ["Relaxing", "Meditation", "Watching movies"],
    ],
    training: {
      monday: {
        trainings: [
          ["Yoga", "Pilates"],
          ["Light weight training", "Stretching"],
        ],
      },
      tuesday: {
        trainings: [["Cardio exercises", "Resistance bands"]],
      },
      wednesday: {
        trainings: [["Yoga", "Meditative walking"]],
      },
      thursday: { trainings: [["Pilates", "Core strengthening"]] },
      friday: {
        trainings: [
          ["Yoga", "Bodyweight exercises"],
          ["Stretching", "Breathing techniques"],
        ],
      },
      saturday: {
        trainings: [["Outdoor walking", "Mind-body connection exercises"]],
      },
      sunday: {
        trainings: [["Gentle yoga", "Meditative stretching"]],
      },
      lastUpdated: "2021-07-01",
    },
    challenges: {
      monday: {
        challenges: {
          food: "Eat a plant-based meal",
          gym: "Practice yoga for 30 minutes",
          freeTime: "Write in your gratitude journal",
        },
      },
      tuesday: {
        challenges: {
          food: "Try a new healthy recipe",
          gym: "Walk 10,000 steps",
          freeTime: "Spend 30 minutes reading",
        },
      },
      wednesday: {
        challenges: {
          food: "Drink 8 glasses of water",
          gym: "Stretch for 20 minutes",
          freeTime: "Meditate for 15 minutes",
        },
      },
      thursday: {
        challenges: {
          food: "Include more greens in your meals",
          gym: "Perform bodyweight exercises",
          freeTime: "Listen to an inspiring podcast",
        },
      },
      friday: {
        challenges: {
          food: "Avoid processed sugar for a day",
          gym: "Do a 30-minute Pilates session",
          freeTime: "Spend time in nature",
        },
      },
      saturday: {
        challenges: {
          food: "Cook a meal with locally-sourced ingredients",
          gym: "Engage in a fun physical activity",
          freeTime: "Volunteer for a cause",
        },
      },
      sunday: {
        challenges: {
          food: "Plan meals for the week",
          gym: "Do light yoga",
          freeTime: "Reflect on the week and plan the next",
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
    currentChallenge: {
      food: 0,
      gym: 0,
      freeTime: 0,
    },
  },
  {
    id: "2", // Fake ID - Should be generated
    name: "Dwayne Johnson",
    description:
      "American-Canadian actor, producer, businessman, retired professional wrestler",
    image: Images.dwayneJohnson,
    currentActivity: "Filming",
    strike: 0,
    motivation: [
      "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
      "If everyone is moving forward together, then success takes care of itself.",
      "Be humble. Be hungry. And always be the hardest worker in the room.",
      "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success.",
    ],
    meals: {
      monday: {
        meals: [
          ["Egg whites, oatmeal, and fruit", "Protein shake"],
          ["Grilled chicken, jasmine rice, and steamed vegetables"],
          ["Grilled salmon, baked potato, and asparagus"],
        ],
      },
      tuesday: {
        meals: [
          ["Egg whites, spinach, and whole grain toast", "Protein shake"],
          ["Lean turkey, quinoa, and mixed greens"],
          ["Steak, sweet potato, and green beans"],
        ],
      },
      wednesday: {
        meals: [
          ["Egg whites, avocado, and fruit", "Protein shake"],
          ["Grilled fish, jasmine rice, and broccoli"],
          ["Chicken breast, baked potato, and a side salad"],
        ],
      },
      thursday: {
        meals: [
          ["Oatmeal with almond butter and bananas", "Protein shake"],
          ["Ground beef, brown rice, and vegetables"],
          ["Salmon, quinoa, and asparagus"],
        ],
      },
      friday: {},
      saturday: {
        meals: [
          ["Egg whites, oatmeal, and peanut butter", "Protein shake"],
          ["Lean beef, jasmine rice, and steamed vegetables"],
          ["Grilled fish, baked potato, and a side salad"],
        ],
      },
      sunday: {
        meals: [
          ["Pancakes, eggs, and turkey bacon", "Protein shake"],
          ["Chicken breast, quinoa, and green beans"],
          ["Steak, sweet potato, and mixed vegetables"],
        ],
      },
      lastUpdated: "2021-07-01",
    },
    freeTime: [
      ["Spending time with family", "Working out", "Fishing"],
      ["Motivational speaking", "Engaging with fans", "Watching movies"],
      ["Cooking", "Meditation", "Training"],
      ["Listening to music", "Exploring outdoors", "Playing with pets"],
      ["Reading scripts", "Charity work", "Networking"],
      ["Relaxing by the pool", "Fitness challenges", "Watching football"],
      ["Reflecting on goals", "Connecting with nature", "Social media updates"],
    ],
    training: {
      monday: {
        trainings: [
          ["Leg day", "High-intensity interval training (HIIT)"],
          ["Stretching", "Core strengthening"],
        ],
      },
      tuesday: { trainings: [["Back and biceps", "Cardio"]] },
      wednesday: {
        trainings: [["Chest and triceps", "Heavy lifting"]],
      },
      thursday: { trainings: [["Leg day", "Endurance training"]] },
      friday: {
        trainings: [
          ["Shoulders", "Arms"],
          ["Core workout", "Stretching"],
        ],
      },
      saturday: {},
      sunday: {
        trainings: [["Active recovery", "Stretching and foam rolling"]],
      },
      lastUpdated: "2021-07-01",
    },
    challenges: {
      monday: {
        challenges: {
          food: "Consume 5,000 clean calories",
          gym: "Train legs until exhaustion",
          freeTime: "Spend 30 minutes reflecting on the week ahead",
        },
      },
      tuesday: {},
      wednesday: {
        challenges: {
          food: "Try a new recipe with high protein",
          gym: "Train upper body intensely",
          freeTime: "Engage in a relaxing activity",
        },
      },
      thursday: {
        challenges: {
          food: "Maintain consistent hydration",
          gym: "Focus on functional fitness",
          freeTime: "Help someone achieve their goals",
        },
      },
      friday: {
        challenges: {
          food: "Avoid processed sugar",
          gym: "Push through a grueling arm workout",
          freeTime: "Spend quality time with family",
        },
      },
      saturday: {
        challenges: {
          food: "Consume extra vegetables",
          gym: "Perform an outdoor workout",
          freeTime: "Plan a weekend getaway",
        },
      },
      sunday: {
        challenges: {
          food: "Cook a cheat meal with a healthy twist",
          gym: "Engage in active recovery",
          freeTime: "Set goals for the upcoming week",
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
    currentChallenge: {
      food: 0,
      gym: 0,
      freeTime: 0,
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
      "Persistence is very important. You should not give up unless you are forced to give up.",
    ],
    meals: {
      monday: {
        meals: [
          ["Egg sandwich", "Coffee"],
          ["Salad with grilled chicken and avocado"],
          ["Steak, mashed potatoes, and green beans"],
        ],
      },
      tuesday: {},
      wednesday: {
        meals: [
          ["Oatmeal with berries and almond milk"],
          ["Grilled salmon, rice, and broccoli"],
          ["Pasta with marinara sauce and a side of garlic bread"],
        ],
      },
      thursday: {
        meals: [
          ["Croissant and black coffee"],
          ["Sushi platter with miso soup"],
          ["Grilled lamb chops with couscous and sautéed spinach"],
        ],
      },
      friday: {
        meals: [
          ["Bagel with cream cheese and smoked salmon"],
          ["Burrito bowl with chicken, rice, beans, and guacamole"],
          ["Pizza night with a mixed greens salad"],
        ],
      },
      saturday: {
        meals: [
          ["French toast and fresh fruit"],
          ["BBQ ribs, coleslaw, and cornbread"],
          ["Ice cream sundae for dessert"],
        ],
      },
      sunday: {
        meals: [
          ["Smoothie with protein powder, banana, and spinach"],
          ["Grilled cheese sandwich with tomato soup"],
          ["Beef stew with crusty bread"],
        ],
      },
      lastUpdated: "2021-07-01",
    },
    freeTime: [
      ["Reading scientific papers", "Brainstorming new ideas", "Gaming"],
      ["Spending time with kids", "Watching documentaries", "Inventing"],
      ["Working on hobbies", "Coding", "Networking"],
      ["Exploring technology trends", "Playing strategy games", "Meditating"],
      ["Planning futuristic projects", "Traveling", "Reading biographies"],
      ["Sketching designs", "Tinkering with machines", "Hosting discussions"],
      ["Relaxing at home", "Listening to music", "Testing prototypes"],
    ],
    training: {
      monday: {
        trainings: [
          ["High-intensity interval training (HIIT)", "Weightlifting"],
          ["Stretching", "Core exercises"],
        ],
      },
      tuesday: { trainings: [["Cardio", "Pull-ups"]] },
      wednesday: {
        trainings: [["Push-ups", "Bodyweight exercises"]],
      },
      thursday: {},
      friday: {
        trainings: [
          ["Yoga", "Endurance running"],
          ["Breathing exercises", "Stretching"],
        ],
      },
      saturday: { trainings: [["Outdoor cycling", "Calisthenics"]] },
      sunday: {},
      lastUpdated: "2021-07-01",
    },
    challenges: {
      monday: {
        challenges: {
          food: "Stick to a balanced meal plan",
          gym: "Perform 30 minutes of HIIT",
          freeTime: "Read a chapter of a new book",
        },
      },
      tuesday: {
        challenges: {
          food: "Avoid caffeine after 2 PM",
          gym: "Complete 10 pull-ups in one go",
          freeTime: "Spend an hour brainstorming innovative ideas",
        },
      },
      wednesday: {
        challenges: {
          food: "Try a plant-based meal",
          gym: "Stretch for 20 minutes",
          freeTime: "Meditate for 10 minutes",
        },
      },
      thursday: {
        challenges: {
          food: "Drink at least 2 liters of water",
          gym: "Run a 5K",
          freeTime: "Draft plans for a new project",
        },
      },
      friday: {
        challenges: {
          food: "Cook a healthy dinner from scratch",
          gym: "Do a full-body workout",
          freeTime: "Play a strategy game",
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
    currentChallenge: {
      food: 0,
      gym: 0,
      freeTime: 0,
    },
  },
  //This is the AI model, don't touch it
  {
    id: "4",
    name: "AI",
    description: "Find using AI",
    image: Images.money,
    currentActivity: "Calculating",
    strike: 0,
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
      lastUpdated: "2021-07-01",
    },
    currentChallenge: {
      food: 0,
      gym: 0,
      freeTime: 0,
    },
  },
];
