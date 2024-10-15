import React, { Fragment, useEffect, useRef } from "react";
import { InternetModel } from "../models/InternetModel";
import { rootActions, useAppDispatch } from "../redux";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { Lottie, StringsRepo } from "../resources";

const InternetWrapper: React.FC<InternetModel> = ({ children }) => {
  const dispatch = useAppDispatch();
  const initialCheck = useRef(true);

  useEffect(() => {
    const handleConnectivityChange = (state: NetInfoState) => {
      if (initialCheck.current) {
        if (state.isInternetReachable === null) {
          return;
        }
        initialCheck.current = false;
      }

      if (state.isConnected && state.isInternetReachable) {
        setTimeout(() => dispatch(rootActions.hideModal()), 1000);
      } else {
        setTimeout(
          () =>
            dispatch(
              rootActions.showModal({
                title: StringsRepo.noInternetConnection,
                buttonTitle: StringsRepo.retry,
                buttonAction: () => console.log("Retry button pressed"),
                lottie: Lottie.astronaut,
                isDismissible: false,
              }),
            ),
          1000,
        );
      }
    };

    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return <Fragment>{children}</Fragment>;
};
export default InternetWrapper;
