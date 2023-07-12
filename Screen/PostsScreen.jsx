import { ImageBackground, StyleSheet } from "react-native";

export const PostsScreen = () => {
  return (
    <ImageBackground
      source={require("./image/photoApp.png")}
      style={styles.container}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 430,
    // height: 932,
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
});
