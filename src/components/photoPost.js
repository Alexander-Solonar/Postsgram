import { StyleSheet, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const PhotoPost = () => {
  const photoUrl = useSelector(state => state.newPhoto);
  const navigation = useNavigation();

  return (
    <View style={styles.imageContainer}>
      {photoUrl && <Image style={{ width: '100%', height: 240 }} source={{ uri: photoUrl }} />}
      <Pressable style={styles.iconCamera} onPress={() => navigation.navigate('CameraScreen')}>
        <Ionicons name="camera" size={24} color="#BDBDBD" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
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
    opacity: 0.5,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
});

export default PhotoPost;
