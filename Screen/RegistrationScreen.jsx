import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialState);

  const keybordHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          ...styles.container,
          marginBottom: isShowKeybord ? 20 : 100,
        }}
      >
        <Image style={styles.image} source={require("./image/AddPhoto.png")} />
        <Text style={styles.text}>Реєстрація</Text>

        <TextInput
          style={styles.input}
          placeholder={"Логін"}
          value={state.login}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, login: value }))
          }
          onFocus={() => setIsShowKeybord(true)}
        />
        <TextInput
          style={styles.input}
          placeholder={"Адреса електронної пошти"}
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
          onFocus={() => setIsShowKeybord(true)}
        />

        <TextInput
          style={styles.input}
          placeholder={"Пароль"}
          value={state.password}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
          onFocus={() => setIsShowKeybord(true)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btn} onPress={keybordHide}>
          <Text style={styles.textBtn}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 375,
    // height: 549,
    width: "100%",
    height: "100%",
    top: 300,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    padding: 16,
    marginTop: 15,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    width: 343,
    height: 50,
    borderRadius: 10,
  },
  text: {
    marginBottom: 30,
    fontWeight: 500,
    fontSize: 30,
    marginTop: 100,
    fontFamily: "Inter-Black",
    lineHeight: 35,
  },
  btn: {
    marginTop: 30,
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
  image: {
    width: 132,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  textLogin: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter-Black",
    lineHeight: 19,
  },
});
