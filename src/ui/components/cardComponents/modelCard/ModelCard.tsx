import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { ModelCardModel, ModelCardType, TextType } from "../../../../models";
import { pageStyle } from "./pageStyle";
import { Text } from "../../updatedComponents";
import { Images } from "../../../../resources";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../../styles";

const ModelCard = (props: ModelCardModel) => {
  const { height } = useWindowDimensions();

  const containerStyleByType = () => {
    return props.type === ModelCardType.vertical
      ? [pageStyle.verticalContainer, { height: height * 0.6 }]
      : props.type === ModelCardType.horizontal &&
          pageStyle.horizontalContainer;
  };

  const linerGradientColors = () => {
    if (props.type === ModelCardType.horizontal) {
      return style.color.gradient3;
    } else if (props.type === ModelCardType.vertical) {
      return style.color.gradient4;
    } else {
      return style.color.gradient1;
    }
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.isDisabled || !props.onPress}
      style={[
        pageStyle.container,
        props.isSelected && { borderWidth: 2 },
        containerStyleByType(),
      ]}
    >
      <ImageBackground
        style={pageStyle.imageContainer}
        imageStyle={[
          pageStyle.imageStyle,
          !props.image && pageStyle.noImageStyle,
        ]}
        source={
          props.image
            ? typeof props.image === "string"
              ? { uri: props.image }
              : props.image
            : Images.imageGallery
        }
      >
        {props.type !== ModelCardType.vertical && (
          <View style={pageStyle.imageTextContainer}>
            <Text
              type={TextType.headingMD}
              style={pageStyle.title}
              numberOfLines={2}
            >
              {props.title}
            </Text>
            {props.type !== ModelCardType.small && (
              <Text
                type={TextType.bodySM}
                style={pageStyle.description}
                numberOfLines={3}
              >
                {props.description ??
                  "This model is to lit for a description. If you need more information feel bad because you dont know"}
              </Text>
            )}
          </View>
        )}
        <LinearGradient
          colors={linerGradientColors()}
          style={[
            pageStyle.gradient,
            props.type === ModelCardType.vertical && pageStyle.verticalGradient,
          ]}
        />
      </ImageBackground>
      {props.type === ModelCardType.vertical && (
        <View style={pageStyle.verticalTextContainer}>
          <Text
            type={TextType.headingL}
            style={pageStyle.verticalTitle}
            numberOfLines={2}
          >
            {props.title}
          </Text>

          <Text
            type={TextType.headingSM}
            style={pageStyle.verticalDescription}
            numberOfLines={4}
          >
            {props.description ??
              "This model is to lit for a description. If you need more information feel bad because you dont know"}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ModelCard;
