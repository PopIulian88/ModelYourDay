import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { Lottie, StringsRepo } from "../../../../resources";
import { MotivationalCardType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";
import { HeaderComponents } from "../../headerComponents";
import LottieView from "lottie-react-native";

export const GymModelComplex = ({
  styles,
  trainings,
  day,
}: {
  styles?: StyleProp<ViewStyle>;
  trainings: string[][] | undefined;
  day?: string;
}) => {
  const handleReload = () => {
    console.log("Refreshed");
  };
  return (
    <View style={[pageStyle.container, styles]}>
      <HeaderComponents
        text={day ?? StringsRepo.gym}
        onPressReload={handleReload}
      />
      {trainings ? (
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
      ) : (
        <View style={pageStyle.nonContainer}>
          <LottieView
            source={Lottie.influencer}
            loop
            autoPlay
            style={pageStyle.lottie}
          />
        </View>
      )}
    </View>
  );
};
