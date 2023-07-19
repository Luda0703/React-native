import { PostsScreen } from "./mainScreen/PostsScreen";
import { CreatePostsScreen } from "./mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./mainScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";

const Tabs = createBottomTabNavigator();

export const Home = () => {
    const [tabBarStyle, setTabBarStyle] = useState('flex');

    return (
        <Tabs.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
    
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#E5E5E5',
            },
    
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#FF6C00',
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#212121',
    
            tabBarStyle: {
              display: tabBarStyle,
              height: 83,
              paddingTop: 5,
              paddingBottom: 34,
              paddingHorizontal: 90,
              borderTopWidth: 1,
              borderColor: '#E5E5E5',
            },
    
            tabBarItemStyle: {
              borderRadius: 20,
            },
          }}
        >
        <Tabs.Screen
        options={{
              headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
        name="Публікації"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Профіль"
        component={ProfileScreen}
      />
      </Tabs.Navigator>
    )
}
