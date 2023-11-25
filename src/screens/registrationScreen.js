import { useDispatch, useSelector } from 'react-redux';
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
import { useNavigation } from '@react-navigation/native';
import { registerDB, updateUserProfile, writeDataToFirestore } from '../firebase/server';
import { setUserProfile } from '../redux/authSlice';
import FormRegistration from '../components/formRegistration';
import { AddAvatarButton } from '../components/buttonIcons';
import image from '../assets/images/photo.jpg';
import { setPostPhoto } from '../redux/postPhotoSlice';

const screenHeight = Dimensions.get('window').height;
const paddingBottomContainer = (screenHeight * 9.6) / 100;

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const postPhoto = useSelector(state => state.postPhoto);
  const dispatch = useDispatch();
  const handleFormSubmit = async ({ login, email, password }, { resetForm }) => {
    try {
      const { user } = await registerDB({ email, password });
      await updateUserProfile({ displayName: login, photoURL: postPhoto });
      writeDataToFirestore(user.uid, login, email, postPhoto);

      dispatch(
        setUserProfile({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        })
      );
      resetForm();
      dispatch(setPostPhoto(''));
      navigation.navigate('Home');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ImageBackground style={styles.imageBackground} source={image}>
      <Pressable onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={paddingBottomContainer}
        >
          <View style={styles.container}>
            <View style={styles.userAvatar}>
              {postPhoto && <Image style={styles.image} source={{ uri: postPhoto }} />}
              <Pressable
                style={styles.iconCamera}
                onPress={() => navigation.navigate('CameraScreen')}
              >
                <AddAvatarButton />
              </Pressable>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <FormRegistration handleFormSubmit={handleFormSubmit} />
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

  iconCamera: {
    display: 'flex',
    flex: 1,
  },

  image: {
    height: '100%',
    borderRadius: 16,
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
