import {
  ImageBackground,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Text as RnText,
} from "react-native";
import { BackButton, Button, Text } from "../../components";
import { pageStyle } from "./pageStyle";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthVerificationModel, ButtonType, TextType } from "../../../models";
import { rootActions, useAppDispatch, userActions } from "../../../redux";
import { style } from "../../../styles";
import { Images, Lottie, StringsRepo } from "../../../resources";
import LottieView from "lottie-react-native";
import { Fragment, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { helper } from "../../../helper";

const AuthVerification = () => {
  const route: RouteProp<{ params: AuthVerificationModel }> = useRoute();

  const [code, setCode] = useState("");

  const dispatch = useAppDispatch();

  const { bottom } = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  //For code input
  const refBlur = useBlurOnFulfill({ value: code, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const handleVerification = async () => {
    if (code === route.params.code) {
      await dispatch(
        userActions.register(
          {
            email: route.params.email,
            username: route.params.username,
            age: route.params.age,
            isOnboardingComplete: false,
            modelsList: [],
            selectedModel: "",
          },
          route.params.password,
        ),
      );
    } else {
      dispatch(
        rootActions.showModal({
          error: true,
          title: StringsRepo.codeIsIncorrect,
        }),
      );
    }
  };

  const isButtonDisabled = () => {
    return code.length !== 4;
  };

  const resendCode = async () => {
    console.log("Resending code...");
    await helper.sendVerificationMail({
      email: route.params.email,
      code: route.params.code,
    });
  };

  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: style.color.sunshade }}
      />
      <ImageBackground
        source={Images.background}
        style={[
          pageStyle.container,
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
        resizeMode={"stretch"}
      >
        <LottieView
          style={[
            pageStyle.lottie,
            { height: height < 700 ? height * 0.1 : height * 0.23 },
          ]}
          source={Lottie.createAccount}
          autoPlay
          loop
          renderMode={"SOFTWARE"}
        />
        <BackButton styles={pageStyle.backButton} />
        <View style={pageStyle.middleContainer}>
          <Text type={TextType.headingXL} style={pageStyle.text}>
            {StringsRepo.verifyCode}
          </Text>
          <View style={pageStyle.textContainer}>
            <Text type={TextType.headingSM} style={pageStyle.text}>
              {StringsRepo.enterCode}
            </Text>
            <Text type={TextType.heading3SM} style={pageStyle.emailText}>
              {route.params.email}
            </Text>
          </View>

          {/*@ts-ignore*/}
          <CodeField
            ref={refBlur}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={code}
            onChangeText={setCode}
            cellCount={4}
            rootStyle={pageStyle.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={Platform.select({
              android: "email",
              default: "one-time-code",
            })}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <RnText
                key={index}
                style={[pageStyle.cell, isFocused && pageStyle.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </RnText>
            )}
          />

          <View style={pageStyle.textContainer}>
            <Text type={TextType.bodyMD} style={{ color: style.color.gray }}>
              {StringsRepo.noReceivedCode}
            </Text>
            <TouchableOpacity onPress={resendCode}>
              <Text
                type={TextType.body3MD}
                style={{ color: style.color.codGray }}
              >
                {StringsRepo.resendCode}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          type={ButtonType.PRIMARY}
          title={StringsRepo.verify}
          isDisabled={isButtonDisabled()}
          onPress={handleVerification}
        />
      </ImageBackground>
    </Fragment>
  );
};
export default AuthVerification;
