import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setUrlPhoto } from '../redux/urlPhotoSlice';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handlePress = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      dispatch(setUrlPhoto(uri));
      navigation.goBack();
    }
  };

  const handleSetTypeCamera = () => {
    setType(
      type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    );
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCameraRef}>
        <View style={styles.photoView}>
          <View style={styles.controlContainer}>
            <View style={{ width: 34 }}></View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <View style={styles.takePhotoOut}>
                <View style={styles.takePhotoInner}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flipContainer} onPress={handleSetTypeCamera}>
              <MaterialCommunityIcons name="camera-flip-outline" size={34} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },

  flipContainer: {},

  button: {},

  takePhotoOut: {
    borderWidth: 2,
    borderColor: 'white',
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: 'white',
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 60,
  },
});

export default CameraScreen;
