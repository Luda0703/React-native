import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';
// import { Headers } from "react-native/Libraries/NewAppScreen";


export const PostsScreen = () => {
  return (
    
   
    
    <View style={styles.container}>
      {/* <headerRight
      
      /> */}
       
      {/* <View>
      <TouchableOpacity
        style={styles.logOut}
        // onPress={signOut}
      >
        <Feather name="log-out" size={24} color="#BDBDBD" />
      </TouchableOpacity>
      </View> */}
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logOut: {
    marginRight: 16,
    marginBottom: 20,
    // marginTop: 400,

  },
  header: {
    justifyContent: 'flex-start'

  }
});
