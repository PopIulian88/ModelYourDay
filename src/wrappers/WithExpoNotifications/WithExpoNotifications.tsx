import React, { useEffect, useRef } from "react";
import { registerForPushNotifications } from "./registerForPushNotifications";
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  getNotificationChannelsAsync,
  removeNotificationSubscription,
  Subscription,
} from "expo-notifications";
import { Platform } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { setNotificationsHandler } from "./setNotificationsHandler";
import { Routes } from "../../ui/navigation/constats";
import { MainNavigatorParams } from "../../ui/navigation/navigators/MainNavigator";

setNotificationsHandler();

export const WithExpoNotifications = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  useEffect(() => {
    registerForPushNotifications().catch(console.log);

    if (Platform.OS === "android") {
      getNotificationChannelsAsync().then((channels) => {
        if (channels.length === 0) {
          throw Error("No notification channels found");
        }
      });
    }

    notificationListener.current = addNotificationReceivedListener(() => {});

    responseListener.current = addNotificationResponseReceivedListener(
      (response) => {
        const { data } = response.notification.request.content;
        if (data.transactionId && data.carIdentifier) {
          // On press notification the user is redirected to the chart screen
          // @ts-ignore
          navigate(Routes.chart, {
            scroll: true,
          });
        }
      },
    );

    return () => {
      if (notificationListener.current) {
        removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        removeNotificationSubscription(responseListener.current);
      }
    };
  }, [navigate]);

  return children;
};
