import { StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, Lottie, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";

export const FreetimeModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  const dayOfWeek = new Date().getDay() - 1;

  return DefaultData.models[1].freeTime ? (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
        {StringsRepo.freeTime}
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <MotivationalCard
          type={MotivationalCardType.DEFAULT}
          list={DefaultData.models[1].freeTime[dayOfWeek]}
          lottie={Lottie.chill}
        />
      </View>
    </View>
  ) : (
    <View></View>
  );
};
