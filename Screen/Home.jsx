import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { LoginScreen } from "./LoginScreen";
import { PostsScreen } from "./mainScreen/PostsScreen";
import { CreatePostsScreen } from "./mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./mainScreen/ProfileScreen";
import { RegistrationScreen } from "./RegistrationScreen";
import { Feather } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const Home = (isAuth) => {
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
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
            headerRight: <Feather name="log-out" size={24} color="#BDBDBD" />,
            // headerStyle: ({ marginRight: 16, marginBottom: 10 }),
                // <TouchableOpacity
                //   style={{ marginRight: 16, marginBottom: 10 }}
                  // onPress={signOut}
                // >
                  
                // </TouchableOpacity>
            //   ),
        //   headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
        
        name="Posts"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
        //   headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
        //   headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};
