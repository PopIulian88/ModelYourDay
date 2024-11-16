import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { style } from "../../../../styles";
import { pageStyle } from "./pageStyle";

export const FoodModelComplex = ({
  styles,
  meals,
  text,
}: {
  styles?: StyleProp<ViewStyle>;
  meals?: string[][];
  text?: string;
}) => {
  return meals ? (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
        {text ?? StringsRepo.food}
      </Text>
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
    </View>
  ) : (
    <View></View>
  );
};
