# 'projectlayout': Sample React Native Project

### Setup [Official Docs](https://facebook.github.io/react-native/docs/getting-started.html)
### Run in emulator
- `npm install`
- `npm install -g react-native-cli`
- `react-native run-ios|run-android`

### Build APK and send to Android Device
- Download [Java](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- Download Android Studio
- Add React Native bundle (due to a bug this doesn't happen automatically):
```
$ react-native bundle --platform android --dev false --entry-file \
index.android.js --bundle-output android/app/src/main/assets/ \
index.android.bundle --assets-dest android/app/src/main/res
```
- Connect device with USB and make sure USB Debugging is enabled in Developer Tools
- Make sure your device is connected with `adb devices`
- Build APK in Android Studio to your device