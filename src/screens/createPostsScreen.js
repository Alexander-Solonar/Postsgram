import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import { Feather } from '@expo/vector-icons';
import PhotoPost from '../components/photoPost';

import ButtonPrimary from '../components/buttonPrimary';
import { DeleteButton } from '../components/buttonIcons';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoUrl } from '../redux/photoUrlSlice';
import { addPost } from '../redux/postsSlice';

const CreatePostsScreen = () => {
  const photoUrl = useSelector(state => state.newPhoto);
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [isFocused, setIsFocused] = useState('');
  const navigation = useNavigation();

  const initialValues = {
    title: '',
    place: '',
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(addPost({ ...values, photoUrl, location, id: Math.random() }));

    navigation.goBack();
    resetForm();
    dispatch(setPhotoUrl(''));
  };

  const handleDelete = handleChange => {
    dispatch(setPhotoUrl(''));
    handleChange('title')('');
    handleChange('place')('');
  };

  const styleInputContainer = title => ({
    ...styles.inputContainer,
    borderBottomColor: isFocused === title ? 'green' : '#E8E8E8',
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={20}>
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <Formik style={{ flex: 1 }} initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ handleChange, handleSubmit, values }) => (
            <View style={styles.container}>
              <PhotoPost />
              <Text style={styles.text}>{photoUrl ? 'Редагувати фото' : 'Завантажте фото'}</Text>
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
                <ButtonPrimary
                  text="Опубліковати"
                  isDisabled={!(!!photoUrl && !!values.place && !!values.title)}
                  handleSubmit={handleSubmit}
                />
                <DeleteButton
                  isDisabled={!(!!photoUrl && !!values.place && !!values.title)}
                  handleDelete={() => handleDelete(handleChange)}
                />
              </View>
            </View>
          )}
        </Formik>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 15,
  },
});

export default CreatePostsScreen;
