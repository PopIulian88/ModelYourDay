import {
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { pageStyle } from "./pageStyle";
import { TextType } from "../../../models";
import {
  DefaultData,
  IconAssets,
  Lottie,
  StringsRepo,
} from "../../../resources";
import { Icon, Text } from "../updatedComponents";
import { style } from "../../../styles";
import LottieView from "lottie-react-native";
import React, { Fragment, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChatText } from "../chatText";
import { LinearGradient } from "expo-linear-gradient";

type ChatListType = [
  {
    user?: string;
    bot?: string;
  },
];

export const ChatBotModal = () => {
  const { bottom } = useSafeAreaInsets();

  const [question, setQuestion] = useState("");
  const [chatList, setChatList] = useState<ChatListType>([{}]);

  const scrollViewRef = useRef<ScrollView>(null);

  const marginBottomHeight = 106;

  //TODO: Implement the bot logic
  const handleSendMessage = () => {
    if (question === "") return;
    chatList.push({ user: question });
    chatList.push({ bot: "I am a bot I don't do much yet" });
    setQuestion("");
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }
    }, 100);
  };

  return (
    <Fragment>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          marginBottom: Math.max(
            bottom + marginBottomHeight,
            marginBottomHeight + 10,
          ),
        }}
      >
        <TouchableHighlight>
          <TouchableWithoutFeedback>
            <View style={pageStyle.container}>
              <Text type={TextType.headingXL} style={pageStyle.headerText}>
                {StringsRepo.hiIm}{" "}
                <Text
                  type={TextType.headingXL}
                  style={{ color: style.color.sunshade }}
                >
                  {DefaultData.models[1].name}
                  {StringsRepo.plural}
                </Text>{" "}
                {StringsRepo.AI}
              </Text>
              <LottieView
                source={Lottie.aiBot}
                loop
                autoPlay
                style={pageStyle.lottie}
              />
              {chatList.map((item, index) => (
                <View
                  key={index}
                  style={{
                    marginTop: 10,
                    alignItems: item.user ? "flex-end" : "flex-start",
                  }}
                >
                  {item.user && <ChatText text={item.user} isSender={true} />}
                  {item.bot && <ChatText text={item.bot} isSender={false} />}
                </View>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </TouchableHighlight>
      </ScrollView>
      <LinearGradient
        colors={style.color.gradient4}
        style={[
          pageStyle.gradient,
          {
            marginBottom: Math.max(
              bottom + marginBottomHeight,
              marginBottomHeight + 10,
            ),
          },
        ]}
      />
      <View
        style={[
          pageStyle.footerContainer,
          { marginBottom: Math.max(bottom + 6, 16) },
        ]}
      >
        <TextInput
          style={pageStyle.textInput}
          multiline={true}
          value={question}
          placeholder={StringsRepo.typeYourQuestion}
          onChangeText={(r) => setQuestion(r)}
        />
        <TouchableOpacity
          style={pageStyle.sendButton}
          onPress={handleSendMessage}
        >
          <Icon name={IconAssets.send} size={30} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};
