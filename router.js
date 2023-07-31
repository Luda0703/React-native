import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoginScreen } from "./Screen/LoginScreen";
import { RegistrationScreen } from "./Screen/RegistrationScreen";
import { Home } from "./Screen/Home";
import { MapScreen } from "./Screen/nestedScreen/MapScreen";
import { CommentsScreen } from "./Screen/nestedScreen/CommentsScreen";

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();

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
      </MainStack.Navigator>
    );
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen name="Карта" component={MapScreen} />
      <HomeStack.Screen name="Коментарі" component={CommentsScreen} />
    </HomeStack.Navigator>
  );
};
