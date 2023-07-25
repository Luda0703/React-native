import React, { useState, useEffect } from "react";
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
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { registerDB } from "../Redax/auth/authOperations"; 

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialState);
  const [displayText, setDisplaytext] = useState("Показати");

  const dispatch = useDispatch()

  const keybordHide = (e) => {
    e.preventDefault();
    setIsShowKeybord(false);
    Keyboard.dismiss();
    // console.log(state);
    // navigation.navigate("Home");
 
    dispatch(registerDB(state));
    setState(initialState);
  };

  useEffect(() => {
    setDisplaytext(showPassword ? "Показати" : "Приховати");
  }, [displayText, showPassword]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
          keyboardVerticalOffset={Platform.OS === "ios" ? -165 : -165}
        >
          <View style={styles.containerForm}>
            <Image
              style={styles.image}
              source={require("./image/AddPhoto.png")}
            />
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
             
             <View>
            <TextInput
              style={styles.input}
              placeholder={"Пароль"}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
              onFocus={() => setIsShowKeybord(true)}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={styles.passwordShow}
              onPress={handleTogglePassword}>
              <Text>{displayText}</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.btn} 
            onPress={keybordHide}
            >
              <Text style={styles.textBtn}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.textLogin}>
              Вже є акаунт?
              <Text
                style={styles.textLogin}
                onPress={() => navigation.navigate("Login")}
              >
                {" "}
                Увійти
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageScreen: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  containerKey: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerForm: {
    paddingTop: 92,
    paddingBottom: 78,
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
    fontWeight: 500,
    fontSize: 30,
    marginTop: 20,
    fontFamily: "Inter-Black",
    lineHeight: 35,
  },
  btn: {
    marginTop: 50,
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
  passwordShow: {
    position: "absolute",
    top: 15,
    right: 65,
    transform: [{ translateX: 50 }, { translateY: 17 }],
    fontFamily: "Inter-Black",
  },
});
