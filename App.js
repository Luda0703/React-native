import { StyleSheet } from "react-native";

import { Home } from "./Screen/Home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Roboto-Light.ttf"),
  });

  const routing = Home(true);

  return (
    <NavigationContainer style={styles.container}>
      {routing}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
