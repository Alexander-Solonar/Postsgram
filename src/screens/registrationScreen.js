import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  Pressable,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
import image from '../assets/images/photo.jpg';
import iconAdd from '../assets/images/iconAdd.png';
import { useNavigation } from '@react-navigation/native';
import FormRegistration from '../components/formRegistration';

const screenHeight = Dimensions.get('window').height;
const paddingBottomContainer = (screenHeight * 9.6) / 100;

const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.imageBackground} source={image}>
      <Pressable onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={paddingBottomContainer}
        >
          <View style={styles.container}>
            <View style={styles.userAvatar}>
              <Image style={styles.iconAddAvatar} source={iconAdd} />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <FormRegistration />
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
              Вже є акаунт? Увійти
            </Text>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: paddingBottomContainer,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },

  userAvatar: {
    position: 'absolute',
    top: -60,
    right: '50%',
    width: 120,
    height: 120,
    transform: [{ translateX: 50 }],
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  iconAddAvatar: {
    position: 'absolute',
    right: -12,
    bottom: 20,
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

export default RegistrationScreen;
