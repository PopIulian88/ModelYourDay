import { View } from "react-native";
import { ModelCard } from "../../cardComponents";
import {
  CurrentModelComplexModel,
  ModelCardType,
  TextType,
} from "../../../../models";
import { StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { style } from "../../../../styles";
import { pageStyle } from "./pageStyle";
import { IStore } from "../../../../redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const CurrentModelComplex = (props: CurrentModelComplexModel) => {
  const { model } = useSelector((state: IStore) => state.modelReducer);
  return (
    <View style={props.styles}>
      <ModelCard
        type={ModelCardType.horizontal}
        title={model?.name ?? "Unknown"}
        description={model?.description ?? "Unknown"}
        image={model?.image ?? ""}
        onPress={props.onPress}
      />
      <View style={pageStyle.textContainer}>
        <Text type={TextType.bodyMD} style={{ color: style.color.codGray }}>
          {StringsRepo.yourModelIsNow}:
        </Text>
        <Text type={TextType.body2MD} style={{ color: style.color.sunshade }}>
          {model?.currentActivity ?? "Unknown"}
        </Text>
      </View>
    </View>
  );
};
