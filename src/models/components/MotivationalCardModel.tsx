export enum MotivationalCardType {
  MOTIVATIONAL = "MOTIVATIONAL",
  SIMPLE = "SIMPLE",
  DEFAULT = "DEFAULT",
}

export type MotivationalCardModel = {
  type: MotivationalCardType;
  header?: string;
  text?: string;
  list?: string[];
  cardNumber?: number;
  lottie?: string;
  onPress?: () => void;
};
