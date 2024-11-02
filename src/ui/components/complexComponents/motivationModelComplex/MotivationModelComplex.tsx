import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";

export const MotivationModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  return DefaultData.models[1].motivation ? (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
        {StringsRepo.motivation}
      </Text>
      <FlatList
        data={DefaultData.models[1].motivation}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={pageStyle.flatList}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={(motivation) => {
          return (
            <Fragment>
              <MotivationalCard
                type={MotivationalCardType.MOTIVATIONAL}
                header={DefaultData.models[1].name}
                text={motivation.item}
              />
              {/*This force can make problems in the future*/}
              {motivation.index ===
                DefaultData.models[1].motivation!.length - 1 && (
                <View style={{ width: 40 }} />
              )}
            </Fragment>
          );
        }}
      />
    </View>
  ) : (
    <View></View>
  );
};
