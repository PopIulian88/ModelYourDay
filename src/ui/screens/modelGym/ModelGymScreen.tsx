import { ScrollView } from "react-native";
import { BackButton, GymModelComplex, Text } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../styles";
import { Fragment } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pageStyle } from "./pageStyle";
import { TextType } from "../../../models";
import { DefaultData, StringsRepo } from "../../../resources";

const ModelGymScreen = () => {
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
          {StringsRepo.whatIs}{" "}
          <Text
            type={TextType.headingXL}
            style={{ color: style.color.sunshade }}
          >
            {DefaultData.models[1].name}
          </Text>{" "}
          {StringsRepo.workoutRoutine}
        </Text>
        <ScrollView contentContainerStyle={pageStyle.trainingScroll}>
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.monday.trainings}
            day={StringsRepo.monday}
          />
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.tuesday.trainings}
            day={StringsRepo.tuesday}
          />
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.wednesday.trainings}
            day={StringsRepo.wednesday}
          />
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.thursday.trainings}
            day={StringsRepo.thursday}
          />
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.friday.trainings}
            day={StringsRepo.friday}
          />
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.saturday.trainings}
            day={StringsRepo.saturday}
          />
          <GymModelComplex
            trainings={DefaultData.models?.[1].training?.sunday.trainings}
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
