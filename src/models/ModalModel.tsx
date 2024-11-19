export type ModalModel = {
  isChatBot?: boolean;
  error?: boolean;
  title: string;
  lottie: string;
  buttonTitle: string;
  buttonAction: () => void;
  secondaryButtonTitle?: string;
  secondaryButtonAction?: () => void;
  isDismissible?: boolean;
  containerStyle?: Object;
};
