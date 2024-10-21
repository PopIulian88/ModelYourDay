export enum ModelCardType {
  small = "small",
  vertical = "vertical",
  horizontal = "horizontal",
}

export type ModelCardModel = {
  type: ModelCardType;
  title: string;
  description?: string;
  image?: string | number;
  isSelected?: boolean;
};
