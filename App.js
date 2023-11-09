import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import RegistrationScreen from './src/screens/registrationScreen';
import LoginScreen from './src/screens/loginScreen';
import Home from './src/screens/home';
import CommentsScreen from './src/screens/commentsScreen';
import MapScreen from './src/screens/mapScreen';
import CameraScreen from './src/screens/cameraScreen';
// import ContextProvider from './src/context/Context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const MainStack = createStackNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={store.persistor}>
        {/* <ContextProvider> */}
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
            <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            <MainStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                title: 'Коментарі',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 17,
                  fontWeight: 'bold',
                },
                headerStyle: {
                  borderBottomWidth: 1,
                },
              }}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                title: 'Карта',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 17,
                  fontWeight: 'bold',
                },
                headerStyle: {
                  borderBottomWidth: 1,
                },
              }}
            />
            <MainStack.Screen
              name="CameraScreen"
              component={CameraScreen}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
        {/* </ContextProvider> */}
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
