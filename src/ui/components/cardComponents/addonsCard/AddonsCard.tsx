import { Image, TouchableOpacity } from "react-native";
import { Text } from "../../updatedComponents";
import { AddonsCardModel, TextType } from "../../../../models";
import { pageStyle } from "./pageStyle";

const AddonsCard = (props: AddonsCardModel) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[pageStyle.container, props.isCheck && { borderWidth: 2 }]}
    >
      <Image source={props.image} style={pageStyle.image} />
      <Text type={TextType.heading2SM}> {props.title} </Text>
    </TouchableOpacity>
  );
};

export default AddonsCard;
