import { ModelModel } from "../../models";
import { Images } from "../images";

export const models: ModelModel[] = [
  {
    name: "Andrew Tate",
    description:
      "American-British social media personality, businessman, kickbox world champion",
    image: Images.topG,
    currentActivity: "Working out",
  },
  {
    name: "Dwayne Johnson",
    description:
      "American-Canadian actor, producer, businessman, retired professional wrestler",
    image: Images.dwayneJohnson,
    currentActivity: "Filming",
  },
  {
    name: "Elon Musk",
    description:
      "Businessman and investor known for his key roles in space company SpaceX and automotive company Tesla",
    image: Images.elonMusk,
    currentActivity: "In space",
  },
  {
    name: "AI",
    description: "Find using AI",
    image: Images.money,
    currentActivity: "Calculating",
  },
];
