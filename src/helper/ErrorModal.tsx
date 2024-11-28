//Resolve cycle
import { rootActions } from "../redux/root";
import { StringsRepo } from "../resources";

export const errorModal = async ({
  errorMessage,
  message,
  dispatch,
}: {
  errorMessage: string;
  message?: string;
  dispatch: any;
}) => {
  console.error(errorMessage);
  await dispatch(
    rootActions.showModal({
      error: true,
      title: message ?? StringsRepo.error.default,
      buttonTitle: StringsRepo.close,
    }),
  );
};
