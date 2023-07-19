import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreenPosts } from '../nestedScreen/DefaultScreenPosts';
import { MapScreen } from '../nestedScreen/MapScreen';
import { CommentsScreen } from '../nestedScreen/CommentsScreen';
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
   return (
    <NestedScreen.Navigator>
    <NestedScreen.Screen 
    options={{
      headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 16, marginBottom: 10 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        ),
  }}
    name='Публікації'
    component={DefaultScreenPosts}
    />
    <NestedScreen.Screen name='Карта' component={MapScreen}/>
    <NestedScreen.Screen name='Коментарі' component={CommentsScreen}/>
   </NestedScreen.Navigator>
   )
}