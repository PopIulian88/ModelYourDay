import * as RNLocalize from "react-native-localize";
import { default as en } from "./en";

const getLanguageFile = (languageCode: string) => {
  switch (languageCode) {
    default:
      return en; // Default to English
  }
};

// Detect user's preferred language
const deviceLanguage = RNLocalize.getLocales()[0]?.languageCode;
export const StringsRepo = getLanguageFile(deviceLanguage);
