import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import PostsScreen from "./postsScreen";

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function User() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const createIconComponent = (IconComponent, name, focused) => (
  <IconComponent
    name={name}
    size={24}
    color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
  />
);

const tabBarStyle = {
  paddingHorizontal: 81,
  borderTopWidth: 1,
  paddingVertical: 10,
  height: 60,
};

const tabBarItemStyle = {
  height: 40,
  borderRadius: 50,
};

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Profile") {
            return createIconComponent(Feather, "grid", focused);
          } else if (route.name === "PostsScreen") {
            return createIconComponent(Ionicons, "add", focused);
          } else if (route.name === "User") {
            return createIconComponent(Feather, "user", focused);
          }
        },
        tabBarLabel: () => null,
        tabBarStyle,
        tabBarItemStyle,
        tabBarActiveBackgroundColor: "#FF6C00",
      })}
    >
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerShown: false }}
      />

      <Tabs.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
