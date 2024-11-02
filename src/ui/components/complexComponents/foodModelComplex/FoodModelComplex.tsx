import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import { DefaultData, StringsRepo } from "../../../../resources";
import { Text } from "../../updatedComponents";
import { MotivationalCardType, TextType } from "../../../../models";
import { Fragment } from "react";
import { MotivationalCard } from "../../cardComponents";
import { style } from "../../../../styles";
import { pageStyle } from "./pageStyle";

export const FoodModelComplex = ({
  styles,
}: {
  styles?: StyleProp<ViewStyle>;
}) => {
  return DefaultData.models[1].meals ? (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
        {StringsRepo.food}
      </Text>
      <FlatList
        data={DefaultData.models[1].meals}
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
              {/*This force can make problems in the future*/}
              {meal.index === DefaultData.models[1].meals!.length - 1 && (
                <View style={{ width: 40 }} />
              )}
            </Fragment>
          );
        }}
      />
      <Text type={TextType.heading2SM} style={{ paddingHorizontal: 20 }}>
        {StringsRepo.todayNumberOfMeals}:{" "}
        <Text style={{ color: style.color.sunshade }}>
          {DefaultData.models[1].meals.length.toString()}
        </Text>
      </Text>
    </View>
  ) : (
    <View></View>
  );
};
