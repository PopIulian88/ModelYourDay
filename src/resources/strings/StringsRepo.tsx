import { default as en } from "./en";

const getLanguageFile = (languageCode: string) => {
  switch (languageCode) {
    default:
      return en; // Default to English
  }
};

// For now we'll just default to English
export const StringsRepo = getLanguageFile("en");
