import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";

export const FreetimeListModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  return DefaultData.models[1].freeTime ? (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
        {StringsRepo.freeTime}
      </Text>
      <FlatList
        data={DefaultData.models[1].freeTime}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={pageStyle.flatList}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={(activities) => {
          return (
            <Fragment>
              <MotivationalCard
                type={MotivationalCardType.DEFAULT}
                header={StringsRepo.activities}
                list={activities.item}
              />
              {/*This force can make problems in the future*/}
              {activities.index ===
                DefaultData.models[1].freeTime!.length - 1 && (
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
