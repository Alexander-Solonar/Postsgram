import { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PhotoPost from '../components/photoPost';
import { Context } from '../context/Context';
import { Formik } from 'formik';
import ButtonPrimary from '../components/buttonPrimary';

const CreatePostsScreen = () => {
  const { photoUrl, setPhotoUrl } = useContext(Context);
  const [isFilledInput, setIsFilledInput] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(!!photoUrl && !!isFilledInput));
  }, [isFilledInput, photoUrl]);

  const initialValues = {
    name: '',
    place: '',
    isFocused: '',
  };

  const handleFormSubmit = (values, { resetForm }) => {
    console.log({ ...values, photoUrl });
    resetForm();
    setPhotoUrl('');
  };

  const updateIsDisabled = (name, place) => {
    setIsFilledInput(!!name.trim() && !!place.trim());
  };

  const styleInputContainer = (focus, name) => {
    return {
      ...styles.inputContainer,
      borderBottomColor: focus === name ? 'green' : '#E8E8E8',
    };
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={20}>
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <Formik style={{ flex: 1 }} initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ handleChange, handleSubmit, values }) => (
            <View style={styles.container}>
              <PhotoPost />
              <Text style={styles.text}>{photoUrl ? 'Редагувати фото' : 'Завантажте фото'}</Text>
              <View style={styles.form}>
                <View style={styleInputContainer(values.isFocused, 'name')}>
                  <TextInput
                    style={styles.input}
                    value={values.name}
                    placeholder="Назва..."
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleChange('isFocused')('name')}
                    onBlur={() => handleChange('isFocused')('')}
                    onChangeText={text => {
                      handleChange('name')(text);
                      updateIsDisabled(text, values.place);
                    }}
                  />
                </View>
                <View style={styleInputContainer(values.isFocused, 'place')}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <TextInput
                    style={styles.input}
                    value={values.place}
                    placeholder="Місцевість..."
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleChange('isFocused')('place')}
                    onBlur={() => handleChange('isFocused')('')}
                    onChangeText={text => {
                      handleChange('place')(text);
                      updateIsDisabled(values.name, text);
                    }}
                  />
                </View>
              </View>

              <View style={styles.btnContainer}>
                <ButtonPrimary
                  text="Опубліковати"
                  isDisabled={isDisabled}
                  handleSubmit={handleSubmit}
                />
                <View style={styles.btnIconDelete}>
                  <Feather name="trash-2" size={24} color="#BDBDBD" />
                </View>
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

  btnIconDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#F6F6F6',
  },
});

export default CreatePostsScreen;
