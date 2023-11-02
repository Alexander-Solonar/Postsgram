import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import RegistrationScreen from "./src/screens/registrationScreen";
import CreatePostsScreen from "./src/screens/createPostsScreen";
import LoginScreen from "./src/screens/loginScreen";
import Home from "./src/screens/home";
import PostsScreen from "./src/screens/postsScreen";
import ProfileScreen from "./src/screens/profileScreen";
import CommentsScreen from "./src/screens/commentsScreen";

const MainStack = createStackNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <NavigationContainer style={styles.container}>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 17,
              fontWeight: "bold",
            },
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
