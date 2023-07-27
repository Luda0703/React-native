import React from "react";

import { Provider } from "react-redux";
import { store } from "./Redax/store";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";

import Main from "./main";

export default function App() {
    const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Roboto-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

