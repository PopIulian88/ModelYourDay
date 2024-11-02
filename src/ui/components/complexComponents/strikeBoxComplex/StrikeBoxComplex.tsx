import { StyleProp, View, ViewStyle } from "react-native";
import { Text } from "../../updatedComponents";
import { TextType } from "../../../../models";
import { DefaultData, StringsRepo } from "../../../../resources";
import { Strike } from "../../strike";
import { pageStyle } from "./pageStyle";

export const StrikeBoxComplex = ({
  styles,
}: {
  styles: StyleProp<ViewStyle>;
}) => {
  const currentStrike = DefaultData.models[1].strike;

  return (
    <View style={[pageStyle.container, styles]}>
      <Text type={TextType.headingMD}>{StringsRepo.strike}</Text>
      {currentStrike < 3 ? (
        <View style={pageStyle.strikeContainer}>
          <Strike
            day={1}
            isCheck={currentStrike >= 1}
            border={currentStrike === 1}
          />
          <Strike
            day={2}
            isCheck={currentStrike >= 2}
            border={currentStrike === 2}
          />
          <Strike
            day={3}
            isCheck={currentStrike >= 3}
            border={currentStrike === 3}
          />
          <Strike day={4} />
          <Strike day={5} />
        </View>
      ) : (
        <View style={pageStyle.strikeContainer}>
          <Strike day={currentStrike - 2} isCheck />
          <Strike day={currentStrike - 1} isCheck />
          <Strike day={currentStrike} isCheck border />
          <Strike day={currentStrike + 1} />
          <Strike day={currentStrike + 2} />
        </View>
      )}
    </View>
  );
};
