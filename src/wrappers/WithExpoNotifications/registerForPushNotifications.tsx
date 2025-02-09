import {
  AndroidImportance,
  getPermissionsAsync,
  requestPermissionsAsync,
  setNotificationChannelAsync,
} from "expo-notifications";
import { Platform } from "react-native";
import { isDevice } from "expo-device";

const handleNotificationChannel = async () => {
  if (Platform.OS === "android") {
    await setNotificationChannelAsync("default", {
      name: "default",
      importance: AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};

const handlePermissions = async () => {
  const { status: existingStatus } = await getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await requestPermissionsAsync();
    finalStatus = status;
  }
  return finalStatus;
};

export const registerForPushNotifications = async () => {
  await handleNotificationChannel();

  if (isDevice) {
    const permissionStatus = await handlePermissions();

    if (permissionStatus !== "granted") {
      throw Error("Don't have permission to send notifications");
    }
  } else {
    throw Error("Must use physical device for Push Notifications");
  }
};
