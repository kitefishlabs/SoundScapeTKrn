/**
 * @format
 */
import { Navigation } from "react-native-navigation"
// import { AppRegistry } from "react-native";
import App from "./App";

const APP_NAME = "SoundScapeTKrn";

// AppRegistry.registerComponent(APP_NAME, () => App);
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
