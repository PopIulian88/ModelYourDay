import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
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
import { Chip } from "../../chip";
import { style } from "../../../../styles";

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

  const handleOnPressDelete = (idToDelete: string) => {
    dispatch(
      rootActions.showModal({
        title: StringsRepo.deleteModel,
        lottie: Lottie.astronaut,
        buttonTitle: StringsRepo.noItWasMistake,
        buttonAction: () => {
          dispatch(rootActions.hideModal());
        },
        secondaryButtonTitle: StringsRepo.yes,
        secondaryButtonAction: async () => {
          dispatch(rootActions.hideModal());

          await dispatch(
            userActions.removeModelFromUser(idToDelete, modelsList || []),
          );
        },
      }),
    );
  };

  return (
    <View style={[pageStyle.container, styles]}>
      {modelsList?.map((model, index) => {
        return (
          <View key={index} style={{ gap: 7, alignItems: "center" }}>
            <ModelCard
              type={ModelCardType.small}
              title={model.name}
              image={model.photo}
              isSelected={index === selectedModelIndex}
              isDisabled={index === selectedModelIndex}
              onPress={() => onModelPress(index)}
            />
            {index !== selectedModelIndex && (
              <TouchableOpacity onPress={() => handleOnPressDelete(model.id)}>
                <Chip
                  text={StringsRepo.remove}
                  styles={{ borderColor: style.color.cerise }}
                  textStyle={{ color: style.color.cerise }}
                />
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
};
