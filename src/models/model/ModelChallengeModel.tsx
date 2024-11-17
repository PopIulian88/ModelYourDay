export type ModelChallengeModel = {
  monday: ModelChallengeDay;
  tuesday: ModelChallengeDay;
  wednesday: ModelChallengeDay;
  thursday: ModelChallengeDay;
  friday: ModelChallengeDay;
  saturday: ModelChallengeDay;
  sunday: ModelChallengeDay;
};

export type ModelChallengeDay = {
  challenges?: {
    food: string;
    gym: string;
    freeTime: string;
  };
};
