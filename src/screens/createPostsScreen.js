import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import { Formik } from 'formik';
import { setPostPhoto } from '../redux/postPhotoSlice';
import { DeleteButton } from '../components/buttonIcons';
import PhotoPost from '../components/photoPost';
import PrimaryButton from '../components/primaryButton';

import { addPost } from '../redux/operations';

const screenHeight = Dimensions.get('window').height;
const tabBarHeight = 83;

const CreatePostsScreen = () => {
  const [location, setLocation] = useState(null);
  const [isFocused, setIsFocused] = useState('');
  const postPhoto = useSelector(state => state.postPhoto);
  const uid = useSelector(state => state.auth.uid);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    place: '',
  };

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setLocation(coords);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const handleFormSubmit = (values, { resetForm }) => {
    const newPost = {
      ...values,
      postPhoto,
      location,
      id: Math.random(),
      comments: [],
      likes: 0,
    };

    dispatch(addPost({ docId: uid, data: newPost }));
    dispatch(setPostPhoto(''));
    resetForm();
    navigation.goBack();
  };

  const handleResetForm = handleChange => {
    dispatch(setPostPhoto(''));
    handleChange('title')('');
    handleChange('place')('');
  };

  const styleInputContainer = input => ({
    ...styles.inputContainer,
    borderBottomColor: isFocused === input ? 'green' : '#E8E8E8',
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <Pressable onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <PhotoPost />
            <Text style={styles.text}>{postPhoto ? 'Редагувати фото' : 'Завантажте фото'}</Text>
            <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
              {({ handleChange, handleSubmit, values }) => (
                <>
                  <View style={styles.form}>
                    <View style={styleInputContainer('title')}>
                      <TextInput
                        style={styles.input}
                        value={values.title}
                        placeholder="Назва..."
                        placeholderTextColor="#BDBDBD"
                        onFocus={() => setIsFocused('title')}
                        onBlur={() => setIsFocused('')}
                        onChangeText={handleChange('title')}
                      />
                    </View>
                    <View style={styleInputContainer('place')}>
                      <Feather name="map-pin" size={24} color="#BDBDBD" />
                      <TextInput
                        style={styles.input}
                        value={values.place}
                        placeholder="Місцевість..."
                        placeholderTextColor="#BDBDBD"
                        onFocus={() => setIsFocused('place')}
                        onBlur={() => setIsFocused('')}
                        onChangeText={handleChange('place')}
                      />
                    </View>
                  </View>

                  <View style={styles.btnContainer}>
                    <PrimaryButton
                      text="Опубліковати"
                      isDisabled={!postPhoto || !values.place.trim() || !values.title.trim()}
                      handleSubmit={handleSubmit}
                    />
                    <DeleteButton
                      isDisabled={!postPhoto || !values.place.trim() || !values.title.trim()}
                      handleDelete={() => handleResetForm(handleChange)}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    height: screenHeight - tabBarHeight,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 8,
    marginBottom: 32,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#BDBDBD',
  },

  form: {
    marginBottom: 32,
    rowGap: 16,
  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
    borderBottomWidth: 1,
  },

  input: {
    flexGrow: 1,
    paddingVertical: 11,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#212121',
  },

  btnContainer: {
    flex: 1,
    alignItems: 'center',
    rowGap: 40,
    justifyContent: 'space-between',
  },
});

export default CreatePostsScreen;
