import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { Lottie, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";

export const GymModelComplex = ({
  styles,
  trainings,
  day,
}: {
  styles?: StyleProp<ViewStyle>;
  trainings: string[][] | undefined;
  day?: string;
}) => {
  return (
    trainings && (
      <View style={[pageStyle.container, styles]}>
        <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
          {day ?? StringsRepo.gym}
        </Text>
        <FlatList
          data={trainings}
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
                {exercises.index === trainings.length - 1 && (
                  <View style={{ width: 40 }} />
                )}
              </Fragment>
            );
          }}
        />
      </View>
    )
  );
};
