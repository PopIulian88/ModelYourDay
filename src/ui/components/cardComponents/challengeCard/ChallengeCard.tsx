import { ChallengeCardModel, TextType } from "../../../../models";
import { pageStyle } from "./pageStyle";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "../../updatedComponents";
import { useState } from "react";

const ChallengeCard = (props: ChallengeCardModel) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const handleCheck = () => {
    setIsCompleted(!isCompleted);
    props.onCheck(!isCompleted);
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
        onPress={handleCheck}
        style={[
          pageStyle.checkContainer,
          isCompleted && { backgroundColor: props.color },
        ]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        {isCompleted && <Icon name={"check"} size={40} />}
      </TouchableOpacity>
    </View>
  );
};
export default ChallengeCard;
