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
  },
  {
    name: "AI",
    description: "Find using AI",
    image: Images.money,
    currentActivity: "Calculating",
    strike: 0,
    motivation: [
      "The only way to get what you want is to deserve what you want.",
      "What you think of yourself is much more important than what others think of you.",
    ],
  },
];
