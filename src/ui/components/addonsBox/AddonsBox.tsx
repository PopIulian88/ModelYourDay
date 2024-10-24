import { Text } from "../updatedComponents";
import { AddonsModel, TextType } from "../../../models";
import { Images, StringsRepo } from "../../../resources";
import { View } from "react-native";
import { AddonsCard } from "../cardComponents";
import { pageStyle } from "./pageStyle";

const AddonsBox = ({
  addonSelected,
  setAddonSelected,
}: {
  addonSelected: any;
  setAddonSelected: any;
}) => {
  const selectAddon = (index: number) => {
    addonSelected === index ? setAddonSelected(-1) : setAddonSelected(index);
  };

  return (
    <View style={pageStyle.container}>
      <Text type={TextType.headingMD}>{StringsRepo.addons}</Text>
      <View style={pageStyle.addonsContainer}>
        <View style={pageStyle.row}>
          <AddonsCard
            image={Images.spotify}
            title={StringsRepo.music}
            onPress={() => selectAddon(AddonsModel.music)}
            isCheck={addonSelected === AddonsModel.music}
          />
          <AddonsCard
            image={Images.basketball}
            title={StringsRepo.sport}
            onPress={() => selectAddon(AddonsModel.sport)}
            isCheck={addonSelected === AddonsModel.sport}
          />
          <AddonsCard
            image={Images.dices}
            title={StringsRepo.games}
            onPress={() => selectAddon(AddonsModel.games)}
            isCheck={addonSelected === AddonsModel.games}
          />
        </View>
        <View style={pageStyle.row}>
          <AddonsCard
            image={Images.camera}
            title={StringsRepo.photo}
            onPress={() => selectAddon(AddonsModel.photo)}
            isCheck={addonSelected === AddonsModel.photo}
          />
          <AddonsCard
            image={Images.money}
            title={StringsRepo.money}
            onPress={() => selectAddon(AddonsModel.money)}
            isCheck={addonSelected === AddonsModel.money}
          />
          <AddonsCard
            image={Images.worldBook}
            title={StringsRepo.smart}
            onPress={() => selectAddon(AddonsModel.smart)}
            isCheck={addonSelected === AddonsModel.smart}
          />
        </View>
      </View>
    </View>
  );
};
export default AddonsBox;
