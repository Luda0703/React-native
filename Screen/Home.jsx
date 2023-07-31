import { DefaultScreenPosts } from "./nestedScreen/DefaultScreenPosts";
import { CreatePostsScreen } from "./mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./mainScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { authLogOut } from "../Redax/auth/authOperations";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  const [tabBarStyle, setTabBarStyle] = useState("flex");
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authLogOut());
  };

  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitleAlign: "center",

        headerStyle: {
          borderBottomWidth: 1,
          borderColor: "#E5E5E5",
        },

        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#212121",

        tabBarStyle: {
          display: tabBarStyle,
          height: 83,
          paddingTop: 5,
          paddingBottom: 34,
          paddingHorizontal: 90,
          borderTopWidth: 1,
          borderColor: "#E5E5E5",
        },

        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16, marginBottom: 10 }}
              onPress={logOut}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
        name="Публікації"
        component={DefaultScreenPosts}
        setTabBarStyle={setTabBarStyle}
      />
      <Tabs.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginRight: 16, marginBottom: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Feather
                name="arrow-left"
                size={24}
                color="#212121"
                marginLeft={16}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
          tabBarStyle: { display: "none" },
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerShown: false,
        }}
        name="Профіль"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};
