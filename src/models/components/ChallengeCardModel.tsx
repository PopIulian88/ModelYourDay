export type ChallengeCardModel = {
  header: string;
  description: string;
  color: string;
  isCompleted: boolean;
  onCheck: (r: boolean) => void;
};
