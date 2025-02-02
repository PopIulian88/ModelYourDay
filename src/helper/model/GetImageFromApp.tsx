import { Image } from "react-native";

export const getImageFromApp = async (imageSource: number) => {
  const asset = Image.resolveAssetSource(imageSource);
  const localUri = asset.uri;

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
    const blob: Blob = await fetchBlob(localUri);
    return blob;
  } catch (error) {
    console.error("Error fetching blob from require:", error);
    throw error;
  }
};
