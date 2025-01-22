import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { Lottie, StringsRepo } from "../../../../resources";
import { MotivationalCardType, RegenDataModel } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { pageStyle } from "./pageStyle";
import LottieView from "lottie-react-native";
import { HeaderComponents } from "../../headerComponents";
import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";

export const MotivationModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  const { model } = useSelector((state: IStore) => state.modelReducer);
  return (
    <View style={[pageStyle.container, styles]}>
      <HeaderComponents
        text={StringsRepo.motivation}
        dataToReload={RegenDataModel.MOTIVATION}
        showReload={true}
      />
      {model?.motivation ? (
        <FlatList
          data={model.motivation}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={pageStyle.flatList}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          renderItem={(motivation) => {
            return (
              <Fragment>
                <MotivationalCard
                  type={MotivationalCardType.MOTIVATIONAL}
                  header={model?.name ?? "Unknown"}
                  text={motivation.item}
                />
                {model?.motivation &&
                  motivation.index === model?.motivation.length - 1 && (
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
