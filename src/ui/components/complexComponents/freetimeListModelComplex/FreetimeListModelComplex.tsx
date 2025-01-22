import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { Lottie, StringsRepo } from "../../../../resources";
import { MotivationalCardType, RegenDataModel } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";
import { HeaderComponents } from "../../headerComponents";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";

export const FreetimeListModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  const { model } = useSelector((state: IStore) => state.modelReducer);
  return (
    <View style={[pageStyle.container, styles]}>
      <HeaderComponents
        text={StringsRepo.freeTime}
        dataToReload={RegenDataModel.FREE_TIME}
        showReload={true}
      />
      {model?.freeTime ? (
        <FlatList
          data={model?.freeTime}
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
                {model?.freeTime &&
                  activities.index === model?.freeTime.length - 1 && (
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
