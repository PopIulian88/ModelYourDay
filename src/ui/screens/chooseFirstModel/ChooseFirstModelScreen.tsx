import { SafeAreaView, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { DefaultData, StringsRepo } from "../../../resources";
import { Button, ModelCard, Text } from "../../components";
import { ButtonType, ModelCardType, TextType } from "../../../models";
import { useState } from "react";

const ChooseFirstModelScreen = () => {
  const [isModelSelected, setIsModelSelected] = useState(true);

  return (
    <SafeAreaView style={pageStyle.container}>
      <View style={pageStyle.headerContainer}>
        <Text type={TextType.headingXL} style={pageStyle.headerTitle}>
          {StringsRepo.chooseYoursFirstModel}
        </Text>
        <Text type={TextType.headingSM} style={pageStyle.headerSubtitle}>
          {StringsRepo.thisChoiceCanBeChangedAfter}
        </Text>
      </View>
      <ModelCard
        type={ModelCardType.vertical}
        title={DefaultData.models[2].name}
        description={DefaultData.models[2].description}
        image={DefaultData.models[2].image}
      />
      <Button
        title={StringsRepo.getStarted}
        type={isModelSelected ? ButtonType.PRIMARY : ButtonType.SECONDARY}
        isDisabled={!isModelSelected}
        // TODO: Implement on press
        onPress={() => console.log("Get Started")}
      />
    </SafeAreaView>
  );
};
export default ChooseFirstModelScreen;
