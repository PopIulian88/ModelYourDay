import { View } from "react-native";
import { ModelCard } from "../../cardComponents";
import {
  CurrentModelComplexModel,
  ModelCardType,
  TextType,
} from "../../../../models";
import { DefaultData, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { style } from "../../../../styles";
import { pageStyle } from "./pageStyle";

export const CurrentModelComplex = (props: CurrentModelComplexModel) => {
  return (
    <View style={props.styles}>
      <ModelCard
        type={ModelCardType.horizontal}
        title={DefaultData.models[1].name}
        description={DefaultData.models[1].description}
        image={DefaultData.models[1].image}
        onPress={props.onPress}
      />
      <View style={pageStyle.textContainer}>
        <Text type={TextType.bodyMD} style={{ color: style.color.codGray }}>
          {StringsRepo.yourModelIsNow}:
        </Text>
        <Text type={TextType.body2MD} style={{ color: style.color.sunshade }}>
          {DefaultData.models[1].currentActivity}
        </Text>
      </View>
    </View>
  );
};
