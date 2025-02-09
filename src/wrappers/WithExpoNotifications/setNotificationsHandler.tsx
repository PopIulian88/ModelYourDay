import { setNotificationHandler } from "expo-notifications";

export const setNotificationsHandler = () =>
  setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
