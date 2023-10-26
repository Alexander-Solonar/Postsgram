import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import PostsScreen from "./postsScreen";
import CreatePostsScreen from "./createPostsScreen";
import { ButtonArrowLeft, ButtonUpload } from "../components/iconButtons";

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

const styleHeader = {
  headerTitleAlign: "center",
  headerStyle: { borderBottomWidth: 1 },
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#212121",
  },
};

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Публікації") {
            return createIconComponent(Feather, "grid", focused);
          } else if (route.name === "Створити") {
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
        name="Публікації"
        component={PostsScreen}
        options={{
          ...styleHeader,
          headerRight: () => <ButtonUpload />,
        }}
      />
      <Tabs.Screen
        name="Створити"
        component={CreatePostsScreen}
        options={{
          ...styleHeader,
          headerLeft: () => <ButtonArrowLeft />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="User"
        component={User}
        options={{
          ...styleHeader,
          headerLeft: () => <ButtonArrowLeft />,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
