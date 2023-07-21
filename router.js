import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoginScreen } from "./Screen/LoginScreen";
import { RegistrationScreen } from "./Screen/RegistrationScreen";
import { Home } from './Screen/Home';
import { MapScreen } from './Screen/nestedScreen/MapScreen';
import {CommentsScreen} from './Screen/nestedScreen/CommentsScreen';
// import { TouchableOpacity } from "react-native";
// import { Feather } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const DefaultStack = createStackNavigator();

export const Router = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      /> 
      <DefaultStack.Screen
        // options={{ 
        //   headerLeft: () => (
        //     <TouchableOpacity
        //       style={{ marginRight: 16, marginBottom: 10 }}
        //       // onPress={() => navigation.goBack()}
        //       onPress={() => navigation.navigate('Публікації')}
        //     >
        //       <Feather name="arrow-left" size={24} color="#212121" />
        //     </TouchableOpacity>
        //   ),
        //   // headerShown: false 
        // }}
        name="Карта"
        component={MapScreen}
      />    
      <DefaultStack.Screen
        //  options={{
        //   headerLeft: () => (
        //     <TouchableOpacity
        //       style={{ marginRight: 16, marginBottom: 10 }}
        //       // onPress={() => navigation.goBack()}
        //       onPress={() => navigation.navigate("Home")}
        //     >
        //       <Feather name="arrow-left" size={24} color="#212121" />
        //     </TouchableOpacity>
        //   ),
        //       // headerShown: false,
         
        // }}
        name="Коментарі"
        component={CommentsScreen}
      />    
      
      </MainStack.Navigator>
      
    );
  }
  // return (
  //   <HomeStack.Navigator>
  //     <HomeStack.Screen
  //       options={{ headerShown: false }}
  //       name="Home"
  //       component={Home}
  //     />
  //   </HomeStack.Navigator>
  // );
};