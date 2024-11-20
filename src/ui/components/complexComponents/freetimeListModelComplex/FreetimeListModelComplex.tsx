import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, Lottie, StringsRepo } from "../../../../resources";
import { MotivationalCardType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";
import { HeaderComponents } from "../../headerComponents";
import LottieView from "lottie-react-native";

export const FreetimeListModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  const handleReload = () => {
    console.log("Reloaded");
  };

  return (
    <View style={[pageStyle.container, styles]}>
      <HeaderComponents
        text={StringsRepo.freeTime}
        onPressReload={handleReload}
      />
      {DefaultData.models[1].freeTime ? (
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
