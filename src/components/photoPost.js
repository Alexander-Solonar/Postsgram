import { useSelector } from 'react-redux';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PhotoPost = () => {
  const urlPhoto = useSelector(state => state.urlPhoto);
  const navigation = useNavigation();

  return (
    <View style={styles.imageContainer}>
      {urlPhoto && <Image style={styles.image} source={{ uri: urlPhoto }} />}
      <Pressable style={styles.iconCamera} onPress={() => navigation.navigate('CameraScreen')}>
        <Ionicons name="camera" size={24} color="#BDBDBD" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
  iconCamera: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    transform: [{ translateX: -30 }, { translateY: -30 }],
    opacity: 0.8,
    borderRadius: 60,
    backgroundColor: '#fff',
  },

  image: {
    height: 240,
  },
});

export default PhotoPost;
