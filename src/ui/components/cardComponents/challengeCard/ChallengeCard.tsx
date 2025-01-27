import { ChallengeCardModel, TextType } from "../../../../models";
import { pageStyle } from "./pageStyle";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "../../updatedComponents";
import {
  IStore,
  modelActions,
  rootActions,
  useAppDispatch,
} from "../../../../redux";
import { Lottie, StringsRepo } from "../../../../resources";
import { useSelector } from "react-redux";

const ChallengeCard = (props: ChallengeCardModel) => {
  const { model } = useSelector((state: IStore) => state.modelReducer);

  const dispatch = useAppDispatch();

  const handleCheck = async () => {
    console.log("Completed: ", props.type);

    dispatch(
      rootActions.showModal({
        title:
          StringsRepo.verifyCompleteChallenge1 +
          " " +
          props.header +
          " " +
          StringsRepo.smallChallenge,
        lottie: Lottie.lit,
        secondaryButtonTitle: StringsRepo.yes,
        secondaryButtonAction: () => {
          dispatch(rootActions.hideModal());

          dispatch(modelActions.completeChallengeModel(model, props.type)).then(
            () => {
              dispatch(
                rootActions.showModal({
                  title: StringsRepo.challengeCompletedCongrats,
                  lottie: Lottie.lit,
                  buttonTitle: StringsRepo.thanks,
                  buttonAction: () => {
                    dispatch(rootActions.hideModal());
                  },
                }),
              );
            },
          );
        },
        buttonTitle: StringsRepo.noItWasMistake,
        buttonAction: () => {
          dispatch(rootActions.hideModal());
        },
      }),
    );

    //This is the old way
    // setIsCompleted(!isCompleted);
    // props.onCheck(!isCompleted);
  };

  return (
    <View style={[pageStyle.container, { borderColor: props.color }]}>
      <View
        style={[pageStyle.leftContainer, { backgroundColor: props.color }]}
      />
      <View style={pageStyle.textContainer}>
        <Text type={TextType.headingMD} numberOfLines={1}>
          {props.header}
        </Text>
        <Text type={TextType.heading2SM} numberOfLines={4}>
          {props.description}
        </Text>
      </View>
      <TouchableOpacity
        disabled={props.isCompleted}
        onPress={handleCheck}
        style={[
          pageStyle.checkContainer,
          props.isCompleted && { backgroundColor: props.color },
        ]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        {props.isCompleted && <Icon name={"check"} size={40} />}
      </TouchableOpacity>
    </View>
  );
};
export default ChallengeCard;
