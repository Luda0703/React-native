import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialState);

  const keybordHide = (e) => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    console.log(state);
    navigation.navigate("Home");
    setState(initialState);
  };

  return (
    <ImageBackground
      source={require("./image/photoApp.png")}
      style={styles.imageScreen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.containerKey}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -230 : -235}
        >
          <View style={styles.containerForm}>
            <Text style={styles.text}>Увійти</Text>

            <TextInput
              style={styles.input}
              placeholder={"Адреса електронної пошти"}
              onFocus={() => setIsShowKeybord(true)}
              value={state.email}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder={"Пароль"}
              onFocus={() => setIsShowKeybord(true)}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={keybordHide}>
              <Text style={styles.textBtn}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.textLog}>
              Немає акаунту?
              <Text
                style={styles.textLogin}
                onPress={() => navigation.navigate("Registration")}
              >
                {" "}
                Зареєструватися
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerKey: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageScreen: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  containerForm: {
    paddingTop: 32,
    paddingBottom: 144,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  input: {
    padding: 16,
    marginTop: 18,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    width: 343,
    height: 50,
    borderRadius: 10,
  },
  text: {
    marginBottom: 25,
    // fontFamily: "Inter-Black",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
  },
  btn: {
    marginTop: 40,
    marginBottom: 16,
    width: 343,
    height: 51,
    borderRadius: 100,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
  },
  textLogin: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    // fontFamily: "Inter-Black",
    textDecorationLine: "underline",
  },
  textLog: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    // fontFamily: "Inter-Black",
  },
});
