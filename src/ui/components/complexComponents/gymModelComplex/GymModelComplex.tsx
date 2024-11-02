import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, Lottie, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";

export const GymModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  return DefaultData.models[1].training ? (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
        {StringsRepo.gym}
      </Text>
      <FlatList
        data={DefaultData.models[1].training}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={pageStyle.flatList}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={(exercises) => {
          return (
            <Fragment>
              <MotivationalCard
                type={MotivationalCardType.DEFAULT}
                header={StringsRepo.todayWeHit}
                list={exercises.item}
                lottie={Lottie.sport}
              />
              {/*This force can make problems in the future*/}
              {exercises.index ===
                DefaultData.models[1].training!.length - 1 && (
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
