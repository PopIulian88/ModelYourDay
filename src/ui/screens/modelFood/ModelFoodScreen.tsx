import { ScrollView } from "react-native";
import { BackButton, FoodModelComplex, Text } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../styles";
import { Fragment } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pageStyle } from "./pageStyle";
import { TextType } from "../../../models";
import { DefaultData, StringsRepo } from "../../../resources";

const ModelFoodScreen = () => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Fragment>
      <BackButton styles={[pageStyle.backButton, { marginTop: top }]} />
      <ScrollView
        style={pageStyle.scrollContainer}
        contentContainerStyle={[
          pageStyle.scrollContentContainer,
          { paddingTop: top, paddingBottom: Math.max(bottom + 90, 100) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text type={TextType.headingXL} style={pageStyle.headerText}>
          {StringsRepo.what}{" "}
          <Text
            type={TextType.headingXL}
            style={{ color: style.color.sunshade }}
          >
            {DefaultData.models[1].name}
          </Text>{" "}
          {StringsRepo.eats}
        </Text>
        <ScrollView contentContainerStyle={pageStyle.mealsScroll}>
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.monday.meals}
            day={StringsRepo.monday}
          />
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.tuesday.meals}
            day={StringsRepo.tuesday}
          />
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.wednesday.meals}
            day={StringsRepo.wednesday}
          />
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.thursday.meals}
            day={StringsRepo.thursday}
          />
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.friday.meals}
            day={StringsRepo.friday}
          />
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.saturday.meals}
            day={StringsRepo.saturday}
          />
          <FoodModelComplex
            meals={DefaultData.models?.[1].meals?.sunday.meals}
            day={StringsRepo.sunday}
          />
        </ScrollView>
      </ScrollView>
      <LinearGradient
        colors={style.color.gradient4}
        style={pageStyle.gradient}
      />
    </Fragment>
  );
};

export default ModelFoodScreen;
