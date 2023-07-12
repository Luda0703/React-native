import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { LoginScreen } from "./Screen/LoginScreen";
import { PostsScreen } from "./Screen/PostsScreen";
import { RegistrationScreen } from "./Screen/RegistrationScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Roboto-Light.ttf"),
  });

  return (
    <View style={styles.container}>
      <PostsScreen></PostsScreen>
      <RegistrationScreen></RegistrationScreen>
      <LoginScreen></LoginScreen>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
