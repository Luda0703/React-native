import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { LoginScreen } from './Screen/LoginScreen';
import { PostsScreen } from './Screen/PostsScreen';
import { RegistrationScreen } from './Screen/RegistrationScreen';


export default function App() {
  return (
    <View style={styles.container}>
       <PostsScreen></PostsScreen>
      <RegistrationScreen></RegistrationScreen>
      <LoginScreen></LoginScreen>
     
      <StatusBar style="auto" />
    </View>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
      // <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // right: -50,
    flex: 1,
    // backgroundColor: "green",
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: "auto",
  },
});
