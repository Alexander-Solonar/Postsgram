import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { loginDB } from '../firebase/server';
import ButtonPrimary from './buttonPrimary';

const FormLogin = () => {
  const [isFocused, setIsFocused] = useState('');
  const navigation = useNavigation();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleFormSubmit = async ({ email, password }, { resetForm }) => {
    try {
      await loginDB({ email, password });
      resetForm();
      navigation.navigate('Home', { screen: 'Публікації', params: { email } });
    } catch (error) {
      console.error('Помилка входу:', error);
    }
  };

  const styleInput = input => ({
    ...styles.input,
    borderColor: isFocused === `${input}` ? '#FF6C00' : '#E8E8E8',
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <View style={{ marginBottom: 16 }}>
          <View style={styles.form}>
            <TextInput
              style={styleInput('email')}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              placeholderTextColor="#BDBDBD"
              value={values.email}
              onChangeText={handleChange('email')}
              onFocus={() => setIsFocused('email')}
              onBlur={() => setIsFocused('')}
            />
            <TextInput
              style={styleInput('password')}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              value={values.password}
              onChangeText={handleChange('password')}
              onFocus={() => setIsFocused('password')}
              onBlur={() => setIsFocused('')}
            />
          </View>
          <ButtonPrimary text={'Увійти'} handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 43,
    rowGap: 16,
  },
  input: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
  },
});

export default FormLogin;
