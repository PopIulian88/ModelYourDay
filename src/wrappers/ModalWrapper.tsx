import { ModalProps, StyleSheet, View } from "react-native";
import { Fragment } from "react";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { IStore, rootActions, useAppDispatch } from "../redux";
import { Button, Text } from "../ui";
import { style } from "../styles";
import LottieView from "lottie-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonType, TextType } from "../models";
import { Lottie, StringsRepo } from "../resources";

export const ModalWrapper = (props: ModalProps) => {
  const dispatch = useAppDispatch();
  const { isModalVisible, modalProps } = useSelector(
    (state: IStore) => state.rootReducer,
  );
  const { bottom } = useSafeAreaInsets();

  const closeModal = () => {
    if (modalProps?.isDismissible === false) return;
    dispatch(rootActions.hideModal());
  };

  return (
    <Fragment>
      {props.children}
      <Modal
        isVisible={isModalVisible}
        swipeDirection={
          modalProps?.isDismissible === false ? undefined : "down"
        }
        onSwipeComplete={closeModal}
        swipeThreshold={200}
        backdropColor={style.color.backgroundFade}
        backdropOpacity={0.69}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        style={pageStyle.wrapContent}
        animationIn={"bounceInUp"}
        animationInTiming={1000}
        animationOut={"slideOutDown"}
        animationOutTiming={1000}
      >
        <View style={[pageStyle.container, modalProps?.containerStyle]}>
          <View style={pageStyle.modalLine} />
          <LottieView
            style={{ height: 200, width: 200 }}
            source={
              modalProps?.error || !modalProps?.lottie
                ? Lottie.error
                : modalProps.lottie
            }
            autoPlay
            loop
            renderMode={"SOFTWARE"}
          />
          <Text type={TextType.headingXL} style={pageStyle.title}>
            {modalProps?.error && !modalProps?.title
              ? StringsRepo.somethingWentWrong
              : modalProps?.title}
          </Text>
          {/*TODO: Change button with the component ones*/}
          <View
            style={[
              pageStyle.buttonContainer,
              { marginBottom: Math.max(bottom + 6, 16) },
            ]}
          >
            {!modalProps?.error && modalProps?.secondaryButtonTitle && (
              <Button
                type={ButtonType.SECONDARY}
                title={modalProps?.secondaryButtonTitle ?? StringsRepo.error}
                onPress={modalProps.secondaryButtonAction ?? closeModal}
              />
            )}
            <Button
              type={ButtonType.PRIMARY}
              title={
                modalProps?.error || !modalProps?.buttonTitle
                  ? StringsRepo.close
                  : modalProps.buttonTitle
              }
              onPress={
                modalProps?.error || !modalProps?.buttonAction
                  ? closeModal
                  : modalProps.buttonAction
              }
            />
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

const pageStyle = StyleSheet.create({
  wrapContent: {
    margin: 0,
    justifyContent: "flex-end",
  },
  container: {
    height: "90%",
    alignItems: "center",
    padding: 16,
    gap: 42,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: style.color.serenade,
  },
  modalLine: {
    height: 8,
    width: "30%",
    borderRadius: 50,
    backgroundColor: style.color.white,
  },
  title: {
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    bottom: 0,
    position: "absolute",
    gap: 16,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
