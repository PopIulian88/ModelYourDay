import { View } from "react-native";
import { ModelCard } from "../../components";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import { IStore, useAppDispatch } from "../../../redux";
import { ModelCardType } from "../../../models";

const HomeScreen = () => {
  const { email } = useSelector((state: IStore) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <View style={pageStyle.container}>
      {/*<Text>Home Screen</Text>*/}
      {/*<Button title={"Logout"} onPress={() => dispatch(userActions.logout())} />*/}
      {/*/!*TODO: This is mocked data*!/*/}
      {/*<Button*/}
      {/*  title={"Open Modal"}*/}
      {/*  onPress={() => {*/}
      {/*    dispatch(*/}
      {/*      rootActions.showModal({*/}
      {/*        error: true,*/}
      {/*        lottie: Lottie.influencer,*/}
      {/*        title: "Are you sure you want to change your Model?",*/}
      {/*        buttonTitle: "Primary Button",*/}
      {/*        buttonAction: () => {*/}
      {/*          console.log("Button Action");*/}
      {/*        },*/}
      {/*        secondaryButtonTitle: "Secondary Button",*/}
      {/*        secondaryButtonAction: () => {*/}
      {/*          console.log("Secondary Button Action");*/}
      {/*        },*/}
      {/*      } as ModalModel),*/}
      {/*    );*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Text>{`Email: ${email}`}</Text>*/}

      <View
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        <ModelCard
          type={ModelCardType.horizontal}
          title={"Mare artist Julius Pop Regele Lore"}
          image={
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
          }
          isSelected
        />
        {/*<ModelCard type={ModelCardType.small} title={"Mare artist"} />*/}
      </View>
    </View>
  );
};
export default HomeScreen;
