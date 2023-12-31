import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import RegistrationScreen from './src/screens/registrationScreen';
import LoginScreen from './src/screens/loginScreen';
import Home from './src/screens/home';
import CommentsScreen from './src/screens/commentsScreen';
import MapScreen from './src/screens/mapScreen';
import CameraScreen from './src/screens/cameraScreen';
import store from './src/redux/store';
import { authStateChanged } from './src/firebase/server';

const MainStack = createStackNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Medium.ttf'),
  });
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [authCompleted, setAuthCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = authStateChanged(user => {
      setIsAuthUser(user);
      setAuthCompleted(true);
    });
    return () => unsubscribe();
  }, []);

  if (!fontsLoaded || !authCompleted) {
    return null;
  }
  return (
    <Provider store={store.store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={store.persistor}>
        <NavigationContainer style={styles.container}>
          <StatusBar style="auto" />
          <MainStack.Navigator initialRouteName={isAuthUser ? 'Home' : 'Login'}>
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
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
