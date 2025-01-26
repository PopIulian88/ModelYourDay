# ModelYourDay

## How to run the project
1. Clone the repository
2. Run `npm install`
3. Add the `.env` file with the following content:
```
Send 10$ to get it
```

4. For IOS run:
4.1 Install `npx expo install expo-build-properties`
4.2 Run `npx expo prebuild `
4.3 Run `npx expo run ios `
4.4 May need to run `pod install` or `npx pod-install` in the ios folder
4.5 If there are any issues, can delete the IOS and ANDROID, and try again

5. For Android run `npx expo run android`
5.1 Make sure you have the ANDROID_HOME environment variable set Ex: `export ANDROID_HOME="/Users/iulianpop/Library/Android/sdk"`
5.2 If there are any issues, can delete the IOS and ANDROID, and try again
5.3 Can also try to do th `4.2` step first

***Note: On ANDROID, to make the google sign in work, you need to add the SHA-1 and SHA-256 key to the firebase project***
This can be done by running `keytool -list -v -alias androiddebugkey -keystore android/app/debug.keystore -storepass android -keypass android`
