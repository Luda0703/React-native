import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("./image/AddPhoto.png")}/>
      <Text style={styles.text}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder={"Логін"} />
      <TextInput
        style={styles.input}
        placeholder={"Адреса електронної пошти"}
      />
      <TextInput style={styles.input} placeholder={"Пароль"} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text>Вже є акаунт? Увійти</Text>
    </View>
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
    marginTop: 10,
    // borderWidth: 1,
    borderColor: "#C0C0C0",
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderRadius: 10,
  },
  text: {
    marginBottom: 30,
    fontWeight: 500,
    fontSize: 30,
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
  image: {
    width: 132,
    height: 120,
    borderRadius: 16,
    // borderWidth: 1,
    // backgroundColor: '#E8E8E8',
    position: 'absolute',
    top: -60,

}
});
