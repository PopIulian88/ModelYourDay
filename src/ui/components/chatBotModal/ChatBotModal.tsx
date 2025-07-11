import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { pageStyle } from "./pageStyle";
import { TextType } from "../../../models";
import { IconAssets, Lottie, StringsRepo } from "../../../resources";
import { Icon, Text } from "../updatedComponents";
import { style } from "../../../styles";
import LottieView from "lottie-react-native";
import React, { Fragment, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChatText } from "../chatText";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import { AI } from "../../../backend";

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
  const [chatLoading, setChatLoading] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  const { model } = useSelector((state: IStore) => state.modelReducer);

  const marginBottomHeight = 106;

  const handleSendMessage = async () => {
    if (question === "") return;

    setChatLoading(true);

    chatList.push({ user: question });

    await AI.chatRequest(question, model?.name ?? "Unknown")
      .then((response) => {
        chatList.push({ bot: response });
        setChatLoading(false);
      })
      .catch((error) => {
        console.error("CHAT REQUEST ERROR in ChatBotModal: ", error);
        chatList.push({ bot: StringsRepo.iDontUnderstand });
        setChatLoading(false);
      });

    //Prepare for the next question
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
                  {model?.name ?? "Unknown"}
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
        {/*While sending the message*/}
        {chatLoading ? (
          <ActivityIndicator
            size="small"
            color={style.color.sunshade}
            style={pageStyle.sendButton}
          />
        ) : (
          <TouchableOpacity
            style={pageStyle.sendButton}
            onPress={handleSendMessage}
          >
            <Icon name={IconAssets.send} size={30} />
          </TouchableOpacity>
        )}
      </View>
    </Fragment>
  );
};
