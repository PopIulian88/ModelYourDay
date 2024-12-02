import { ScrollView } from "react-native";
import { BackButton, GymModelComplex, Text } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../styles";
import { Fragment } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pageStyle } from "./pageStyle";
import { TextType } from "../../../models";
import { StringsRepo } from "../../../resources";
import { IStore } from "../../../redux";
import { useSelector } from "react-redux";

const ModelGymScreen = () => {
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
          {StringsRepo.whatIs}{" "}
          <Text
            type={TextType.headingXL}
            style={{ color: style.color.sunshade }}
          >
            {model?.name ?? "Unknown"}
          </Text>{" "}
          {StringsRepo.workoutRoutine}
        </Text>
        <ScrollView contentContainerStyle={pageStyle.trainingScroll}>
          <GymModelComplex
            trainings={model?.training?.monday?.trainings}
            day={StringsRepo.monday}
          />
          <GymModelComplex
            trainings={model?.training?.tuesday?.trainings}
            day={StringsRepo.tuesday}
          />
          <GymModelComplex
            trainings={model?.training?.wednesday?.trainings}
            day={StringsRepo.wednesday}
          />
          <GymModelComplex
            trainings={model?.training?.thursday?.trainings}
            day={StringsRepo.thursday}
          />
          <GymModelComplex
            trainings={model?.training?.friday?.trainings}
            day={StringsRepo.friday}
          />
          <GymModelComplex
            trainings={model?.training?.saturday?.trainings}
            day={StringsRepo.saturday}
          />
          <GymModelComplex
            trainings={model?.training?.sunday?.trainings}
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
export default ModelGymScreen;
