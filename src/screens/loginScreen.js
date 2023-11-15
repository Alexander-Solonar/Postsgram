import { useDispatch } from 'react-redux';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginDB } from '../firebase/server';
import { setUserProfile } from '../redux/authSlice';
import FormLogin from '../components/formLogin';
import image from '../assets/images/photo.jpg';

const screenHeight = Dimensions.get('window').height;
const paddingBottomContainer = (screenHeight * 17.7) / 100;

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFormSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const user = await loginDB({ email, password });

      dispatch(
        setUserProfile({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );

      resetForm();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Помилка входу:', error);
    }
  };

  return (
    <ImageBackground style={styles.image} source={image}>
      <Pressable onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <Text style={styles.title}>Увійти</Text>

            <FormLogin handleFormSubmit={handleFormSubmit} />
            <Text style={styles.link} onPress={() => navigation.navigate('Registration')}>
              Немає акаунту? Зареєструватися
            </Text>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },

  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: paddingBottomContainer,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginBottom: 33,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.3,
    color: '#212121',
  },

  link: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#1B4371',
  },
});

export default LoginScreen;
