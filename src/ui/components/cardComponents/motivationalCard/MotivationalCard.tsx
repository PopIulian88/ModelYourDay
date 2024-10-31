import { useWindowDimensions, View } from "react-native";
import { Text } from "../../updatedComponents";
import {
  MotivationalCardModel,
  MotivationalCardType,
  TextType,
} from "../../../../models";
import { pageStyle } from "./pageStyle";
import { style } from "../../../../styles";
import { Fragment } from "react";
import LottieView from "lottie-react-native";
import { Lottie } from "../../../../resources";

const MotivationalCard = (props: MotivationalCardModel) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        pageStyle.container,
        { width: width * 0.8 },
        props.type === MotivationalCardType.MOTIVATIONAL &&
          pageStyle.motivationalStyle,
        props.type === MotivationalCardType.SIMPLE && {
          borderWidth: 2,
        },
      ]}
    >
      {props.type !== MotivationalCardType.SIMPLE ? (
        <Fragment>
          <View style={{ flex: 1 }}>
            {(props.header || props.cardNumber) && (
              <Text
                type={
                  props.type === MotivationalCardType.MOTIVATIONAL
                    ? TextType.heading3SM
                    : TextType.bodyL
                }
                style={[
                  pageStyle.motivationalHeaderStyle,
                  !props.cardNumber
                    ? props.type === MotivationalCardType.MOTIVATIONAL
                      ? { color: style.color.tundora }
                      : { color: style.color.black }
                    : { color: style.color.goldDrop },
                ]}
              >
                {props.header ? props.header : props.cardNumber}
              </Text>
            )}
            {props.list ? (
              props.list.map((item, index) => (
                <Text
                  key={index}
                  type={TextType.heading2SM}
                  style={{ color: style.color.black }}
                >
                  • {item}
                </Text>
              ))
            ) : (
              <Text type={TextType.heading3SM} numberOfLines={5}>
                {props.text}
              </Text>
            )}
          </View>
          {props.lottie && (
            <LottieView
              source={props.lottie}
              autoPlay
              loop
              style={pageStyle.lottie}
            />
          )}
        </Fragment>
      ) : (
        //This the SIMPLE type
        <Fragment>
          <LottieView
            source={props.lottie ? props.lottie : Lottie.sport}
            autoPlay
            loop
            style={pageStyle.lottie}
          />
          <View style={pageStyle.simpleText}>
            <Text type={TextType.headingMD}>{props.text}</Text>
          </View>
        </Fragment>
      )}
    </View>
  );
};

export default MotivationalCard;
