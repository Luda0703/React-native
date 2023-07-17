import { PostsScreen } from "./mainScreen/PostsScreen";
import { CreatePostsScreen } from "./mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./mainScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export const Home = () => {
    return (
        <Tabs.Navigator>
        <Tabs.Screen
        options={{
        //   headerRight: <Feather name="log-out" size={24} color="#BDBDBD" />,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
        
        name="Posts"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      </Tabs.Navigator>
    )
}
