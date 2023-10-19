import { StatusBar, Image } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import RegistrationScreen from "./src/screens/registrationScreen";
import LoginScreen from "./src/screens/loginScreen";
import Home from "./src/screens/home";
import ButtonUpload from "./src/components/buttonUpload";

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
          options={styleHomeHeader}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styleHomeHeader = {
  title: "Публікації",
  headerStyle: { borderBottomWidth: 1 },
  headerContainerStyle: {},
  headerTitleStyle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 17,
  },

  headerTitleAlign: "center",
  headerTintColor: "#212121",
  headerLeft: null,
  headerRight: () => <ButtonUpload />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
