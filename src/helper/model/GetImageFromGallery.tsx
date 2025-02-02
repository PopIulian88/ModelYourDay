import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult } from "expo-image-picker";
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
    // Blob the image
    try {
      async function fetchBlob(uri: string | URL | Request) {
        try {
          const response = await fetch(uri);
          if (!response.ok) {
            throw new Error(`Network request failed: ${response.statusText}`);
          }
          return await response.blob();
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      const { uri } = await FileSystem.getInfoAsync(result.assets[0].uri);
      const blob: Blob = await fetchBlob(uri);
      return blob;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
};
