import { StyleProp, View, ViewStyle } from "react-native";
import { pageStyle } from "./pageStyle";
import { DefaultData, Lottie, StringsRepo } from "../../../../resources";
import { ModelCard } from "../../cardComponents";
import { ModelCardType } from "../../../../models";
import { useState } from "react";
import { models } from "../../../../resources/defaultData/Models";
import { useAppDispatch } from "../../../../redux";
import { hideModal, showModal } from "../../../../redux/root/RootSlice";

export const UserModelsComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  const [selectedModel, setSelectedModel] = useState(
    models.indexOf(
      DefaultData.models.find(
        (model) => model.name === DefaultData.models[1].name,
      ) ?? models[0],
    ),
  );

  const dispatch = useAppDispatch();

  const onModelPress = (index: number) => {
    dispatch(
      showModal({
        title: StringsRepo.changeTheModel,
        lottie: Lottie.influencer,
        buttonTitle: StringsRepo.noLikeThisOne,
        buttonAction: () => {
          dispatch(hideModal());
        },
        secondaryButtonTitle: StringsRepo.yesPlease,
        secondaryButtonAction: () => {
          //TODO: Sava the changes into DB
          setSelectedModel(index);
          dispatch(hideModal());
        },
      }),
    );
  };

  return (
    <View style={[pageStyle.container, styles]}>
      {DefaultData.models.map((model, index) => {
        return (
          <ModelCard
            type={ModelCardType.small}
            title={model.name}
            image={model.image}
            isSelected={index === selectedModel}
            isDisabled={index === selectedModel}
            onPress={() => onModelPress(index)}
          />
        );
      })}
    </View>
  );
};
