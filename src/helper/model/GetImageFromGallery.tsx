import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult } from "expo-image-picker";
import { imageUriToBlob } from "../ImageUriToBlob";
import * as FileSystem from "expo-file-system";

export const getImageFromGallery = async () => {
  // Select image from gallery
  let result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const { uri } = await FileSystem.getInfoAsync(result.assets[0].uri);

    return await imageUriToBlob(uri);
  }
};
