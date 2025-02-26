import {
  getPermissionsAsync,
  scheduleNotificationAsync,
} from "expo-notifications";

export type SchedulePushNotificationPayload = {
  title: string;
  body: string;
  data: {
    // Could add some data here
  };
  date: Date;
};

export const schedulePushNotification = async ({
  title,
  body,
  data,
  date,
}: SchedulePushNotificationPayload) => {
  const { status: existingStatus } = await getPermissionsAsync();
  console.log("Scheduling push notification");

  if (existingStatus === "granted") {
    await scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
      },
      trigger: { date },
    }).then((r) => console.log("Notification schedule: ", r));
  } else {
    throw Error("Don't have permission to send notifications");
  }
};
