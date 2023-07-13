import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
  Platform,
} from "react-native";


export const RegistrationScreen = () => {
    const [text, setText] = useState("");
    const [isShowKeybord, setIsShowKeybord] = useState(false);


  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        // <KeyboardAvoidingView 
        // behavior={Platform.OS == "ios" ? "padding" : "height"}>
    <View style={{
            ...styles.container,
            marginBottom: isShowKeybord ? 20 : 100,
          }}>
      <Image style={styles.image} source={require("./image/AddPhoto.png")} />
      <Text style={styles.text}>Реєстрація</Text>
      
      <TextInput 
      style={styles.input} 
      placeholder={"Логін"} 
      value={text.login}
      onChangeText={setText}
      name="login"
      onFocus={() => setIsShowKeybord(true)}
   
      />
      <TextInput
        style={styles.input}
        placeholder={"Адреса електронної пошти"}
        value={text.email}
        onChangeText={setText}
        name="email"
        onFocus={() => setIsShowKeybord(true)} 
        autoComplete="email"
      />
    
      <TextInput 
      style={styles.input} 
      placeholder={"Пароль"} 
      value={text.password}
      onChangeText={setText}
      name="password"
      onFocus={() => setIsShowKeybord(true)}
   
      />
     
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.textBtn}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
    </View>
    // </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 375,
    // height: 549,
    width: "100%",
    height: "75%",
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
    fontFamily: 'Inter-Black',
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
    fontFamily: 'Inter-Black',
    lineHeight: 19,
  },
});
