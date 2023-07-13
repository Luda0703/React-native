import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
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
        <Text style={styles.textLogin}>Немає акаунту? Зареєструватися</Text>
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
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "#E8E8E8",
    borderColor: "#C0C0C0",
    width: 343,
    height: 50,
  },
  text: {
    marginBottom: 30,
    fontFamily: "Inter-Black",
    fontSize: 24,
    marginTop: 100,
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
  textLogin: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter-Black",
  },
});
