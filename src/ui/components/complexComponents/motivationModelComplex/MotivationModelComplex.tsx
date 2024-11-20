import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, Lottie, StringsRepo } from "../../../../resources";
import { MotivationalCardType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";
import LottieView from "lottie-react-native";
import { HeaderComponents } from "../../headerComponents";

export const MotivationModelComplex = ({
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
        text={StringsRepo.motivation}
        onPressReload={handleReload}
      />
      {DefaultData.models[1].motivation ? (
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
