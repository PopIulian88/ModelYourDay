import { Animated, View } from "react-native";
import {
  AddonsCard,
  BackButton,
  Button,
  Text,
  TextInput,
} from "../../components";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { Fragment, useState } from "react";
import { pageStyle } from "./pageStyle";
import { Images, StringsRepo } from "../../../resources";
import { ButtonType, TextInputType, TextType } from "../../../models";
import ScrollView = Animated.ScrollView;
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FindYourModelScreen = () => {
  const route = useRoute<RouteProp<MainNavigatorParams>>();

  const { top, bottom } = useSafeAreaInsets();

  const [selectedModel, setSelectedModel] = useState(route.params);
  const [searchText, setSearchText] = useState("");
  const [addonSelected, setAddonSelected] = useState(-1);

  console.log("PARAMS: ", selectedModel);

  enum addons {
    music = 0,
    sport = 1,
    games = 2,
    photo = 3,
    money = 4,
    smart = 5,
  }

  const selectAddon = (index: number) => {
    addonSelected === index ? setAddonSelected(-1) : setAddonSelected(index);
  };

  const FindModel = () => {
    return (
      <View style={pageStyle.findModelContainer}>
        <Text type={TextType.headingMD}>{StringsRepo.addons}</Text>
        <View style={pageStyle.addonsContainer}>
          <View style={pageStyle.row}>
            <AddonsCard
              image={Images.spotify}
              title={StringsRepo.music}
              onPress={() => selectAddon(addons.music)}
              isCheck={addonSelected === addons.music}
            />
            <AddonsCard
              image={Images.basketball}
              title={StringsRepo.sport}
              onPress={() => selectAddon(addons.sport)}
              isCheck={addonSelected === addons.sport}
            />
            <AddonsCard
              image={Images.dices}
              title={StringsRepo.games}
              onPress={() => selectAddon(addons.games)}
              isCheck={addonSelected === addons.games}
            />
          </View>
          <View style={pageStyle.row}>
            <AddonsCard
              image={Images.camera}
              title={StringsRepo.photo}
              onPress={() => selectAddon(addons.photo)}
              isCheck={addonSelected === addons.photo}
            />
            <AddonsCard
              image={Images.money}
              title={StringsRepo.money}
              onPress={() => selectAddon(addons.money)}
              isCheck={addonSelected === addons.money}
            />
            <AddonsCard
              image={Images.worldBook}
              title={StringsRepo.smart}
              onPress={() => selectAddon(addons.smart)}
              isCheck={addonSelected === addons.smart}
            />
          </View>
        </View>
      </View>
    );
  };

  const ModelFound = () => {
    return (
      <Text type={TextType.bodyMD}>{StringsRepo.chooseYoursFirstModel}</Text>
    );
  };

  return (
    <View style={[pageStyle.container]}>
      <ScrollView
        style={[pageStyle.scrollContainer]}
        contentContainerStyle={[
          pageStyle.scrollContentContainer,
          { paddingTop: top, paddingBottom: Math.max(bottom + 90, 100) },
        ]}
      >
        <BackButton styles={pageStyle.backButton} />
        <Text type={TextType.headingXL} style={pageStyle.title}>
          {StringsRepo.findYourModel}
        </Text>

        {!selectedModel ? (
          <Fragment>
            <TextInput
              type={TextInputType.SPECIAL}
              placeholder={StringsRepo.modelName}
              value={searchText}
              onChangeText={(r) => setSearchText(r)}
            />
            <FindModel />
          </Fragment>
        ) : (
          <ModelFound />
        )}
      </ScrollView>
      <View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width: "100%",
            alignItems: "center",
          },
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
      >
        <Button
          title={StringsRepo.find}
          type={ButtonType.PRIMARY}
          onPress={() => console.log("Dame")}
        />
      </View>
    </View>
  );
};
export default FindYourModelScreen;
