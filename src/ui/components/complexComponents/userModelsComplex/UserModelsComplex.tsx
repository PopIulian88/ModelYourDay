import { StyleProp, View, ViewStyle } from "react-native";
import { pageStyle } from "./pageStyle";
import { Lottie, StringsRepo } from "../../../../resources";
import { ModelCard } from "../../cardComponents";
import { ModelCardType } from "../../../../models";
import { useState } from "react";
import {
  IStore,
  modelActions,
  rootActions,
  useAppDispatch,
  userActions,
} from "../../../../redux";
import { useSelector } from "react-redux";

export const UserModelsComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  const { selectedModel } = useSelector((state: IStore) => state.userReducer);
  const { modelsList } = useSelector((state: IStore) => state.userReducer);

  const [selectedModelIndex, setSelectedModelIndex] = useState(
    modelsList?.indexOf(
      modelsList?.find((smallModel) => smallModel.id === selectedModel) ??
        modelsList[0],
    ) ?? 0,
  );

  const dispatch = useAppDispatch();

  const onModelPress = (index: number) => {
    dispatch(
      rootActions.showModal({
        title: StringsRepo.changeTheModel,
        lottie: Lottie.influencer,
        buttonTitle: StringsRepo.noLikeThisOne,
        buttonAction: () => {
          dispatch(rootActions.hideModal());
        },
        secondaryButtonTitle: StringsRepo.yesPlease,
        secondaryButtonAction: async () => {
          dispatch(rootActions.hideModal());
          // Change the current selected model
          modelsList &&
            (await dispatch(
              userActions.setSelectedModel(modelsList[index].id),
            ).then(async () => {
              // Refresh the model data
              await dispatch(modelActions.getModel(modelsList[index].id));
            }));
        },
      }),
    );
  };

  return (
    <View style={[pageStyle.container, styles]}>
      {modelsList?.map((model, index) => {
        return (
          <ModelCard
            key={index}
            type={ModelCardType.small}
            title={model.name}
            image={model.photo}
            isSelected={index === selectedModelIndex}
            isDisabled={index === selectedModelIndex}
            onPress={() => onModelPress(index)}
          />
        );
      })}
    </View>
  );
};
