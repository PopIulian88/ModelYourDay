import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { Lottie, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import {
  MotivationalCardType,
  RegenDataModel,
  TextType,
} from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { style } from "../../../../styles";
import { pageStyle } from "./pageStyle";
import { HeaderComponents } from "../../headerComponents";
import LottieView from "lottie-react-native";

export const FoodModelComplex = ({
  styles,
  meals,
  day,
  showReload,
  showAllButton,
}: {
  styles?: StyleProp<ViewStyle>;
  meals?: string[][] | undefined;
  day?: string;
  showReload?: boolean;
  showAllButton?: boolean;
}) => {
  return (
    <View style={[pageStyle.container, styles]}>
      <HeaderComponents
        text={day ?? StringsRepo.food}
        dataToReload={RegenDataModel.FOOD}
        showReload={showReload ?? true}
        showAllButton={showAllButton}
      />
      {meals ? (
        <Fragment>
          <FlatList
            data={meals}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={pageStyle.flatList}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={(meal) => {
              return (
                <Fragment>
                  <MotivationalCard
                    type={MotivationalCardType.DEFAULT}
                    cardNumber={meal.index + 1}
                    list={meal.item}
                  />
                  {meal.index === meals.length - 1 && (
                    <View style={{ width: 40 }} />
                  )}
                </Fragment>
              );
            }}
          />
          <Text type={TextType.heading2SM} style={{ paddingHorizontal: 20 }}>
            {StringsRepo.todayNumberOfMeals}:{" "}
            <Text style={{ color: style.color.sunshade }}>
              {meals.length.toString()}
            </Text>
          </Text>
        </Fragment>
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
