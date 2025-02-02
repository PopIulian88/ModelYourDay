export const imageUriToBlob = async (ImageUri: string) => {
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

    const blob: Blob = await fetchBlob(ImageUri);
    return blob;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
