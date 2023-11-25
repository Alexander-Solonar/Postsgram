import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Post from '../components/post';
import image from '../assets/images/photo.jpg';
import { UploadButton, DeleteAvatarButton } from '../components/buttonIcons';
import { Spinner } from './spinner';

const ProfileScreen = () => {
  const user = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.posts);

  return (
    <ImageBackground style={styles.imageBackground} source={image} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.userAvatarContainer}>
          <Image style={styles.userPhoto} source={{ uri: user.photoURL }} />
          <DeleteAvatarButton />
        </View>
        <View style={styles.btnOut}>
          <UploadButton />
        </View>
        <Text style={styles.title}>{user.displayName}</Text>
        {!isLoading && <Spinner />}
        <Post like={true} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: -80,
    paddingTop: 120,
  },

  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 16,
    paddingBottom: 55,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },

  userAvatarContainer: {
    position: 'absolute',
    top: -60,
  },

  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  btnOut: {
    marginLeft: 'auto',
    marginBottom: 46,
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
});

export default ProfileScreen;
