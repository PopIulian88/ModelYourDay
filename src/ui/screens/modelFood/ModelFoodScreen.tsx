import { ScrollView } from "react-native";
import { BackButton, FoodModelComplex, Text } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../styles";
import { Fragment } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pageStyle } from "./pageStyle";
import { TextType } from "../../../models";
import { StringsRepo } from "../../../resources";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";

const ModelFoodScreen = () => {
  const { bottom, top } = useSafeAreaInsets();

  const { model } = useSelector((state: IStore) => state.modelReducer);

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
            {model?.name ?? "Unknown"}
          </Text>{" "}
          {StringsRepo.eats}
        </Text>
        <ScrollView contentContainerStyle={pageStyle.mealsScroll}>
          <FoodModelComplex
            meals={model?.meals?.monday?.meals}
            day={StringsRepo.monday}
            showReload={false}
          />
          <FoodModelComplex
            meals={model?.meals?.tuesday?.meals}
            day={StringsRepo.tuesday}
            showReload={false}
          />
          <FoodModelComplex
            meals={model?.meals?.wednesday?.meals}
            day={StringsRepo.wednesday}
            showReload={false}
          />
          <FoodModelComplex
            meals={model?.meals?.thursday?.meals}
            day={StringsRepo.thursday}
            showReload={false}
          />
          <FoodModelComplex
            meals={model?.meals?.friday?.meals}
            day={StringsRepo.friday}
            showReload={false}
          />
          <FoodModelComplex
            meals={model?.meals?.saturday?.meals}
            day={StringsRepo.saturday}
            showReload={false}
          />
          <FoodModelComplex
            meals={model?.meals?.sunday?.meals}
            day={StringsRepo.sunday}
            showReload={false}
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
