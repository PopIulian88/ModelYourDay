export type ModelChallengeModel = {
  monday: ModelChallengeDay;
  tuesday: ModelChallengeDay;
  wednesday: ModelChallengeDay;
  thursday: ModelChallengeDay;
  friday: ModelChallengeDay;
  saturday: ModelChallengeDay;
  sunday: ModelChallengeDay;
  lastUpdated: string;
};

export type ModelChallengeDay = {
  challenges?: {
    food: string;
    gym: string;
    freeTime: string;
  };
};
