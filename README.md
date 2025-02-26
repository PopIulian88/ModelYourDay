# ModelYourDay

## How to run the project
1. Clone the repository
2. Run `npm install`
3. Add the `.env` file with the following content:
```
Send 10$ to get it :)
```
4. Install `npx expo install expo-build-properties`
5. Run `npx expo prebuild`


6. For IOS run:
  6.1 Run `npx expo run ios `
  
    6.2 May need to run `pod install` or `npx pod-install` in the ios folder

7. For Android run `npx expo run android`

    7.1 Make sure you have the ANDROID_HOME environment variable set ex:

          MAC (.zshrc) -> `export ANDROID_HOME="/Users/iulianpop/Library/Android/sdk"`

          WINDOWS(ENV -> System Variables -> NEW) -> `C:\Users\Iulian\AppData\Local\Android\Sdk`

---
*If there are any issues, can delete the IOS and ANDROID, and try again

***Note: On ANDROID, to make the google sign in work, you need to add the SHA-1 and SHA-256 key to the firebase project***
This can be done by running `keytool -list -v -alias androiddebugkey -keystore android/app/debug.keystore -storepass android -keypass android`
