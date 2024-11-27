//Resolve cycle
import { rootActions } from "../redux/root";
import { StringsRepo } from "../resources";

export const basicError = async ({
  message,
  dispatch,
}: {
  message?: string;
  dispatch: any;
}) => {
  await dispatch(
    rootActions.showModal({
      error: true,
      title: message ?? StringsRepo.error,
      buttonTitle: StringsRepo.close,
    }),
  );
};
