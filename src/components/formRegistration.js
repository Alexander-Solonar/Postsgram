import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { registerDB } from '../firebase/server';
import ButtonPrimary from './buttonPrimary';

const FormRegistration = () => {
  const [isFocused, setIsFocused] = useState('');
  const navigation = useNavigation();

  const initialValues = {
    login: '',
    email: '',
    password: '',
  };

  const handleFormSubmit = async ({ login, email, password }, { resetForm }) => {
    try {
      // await registerDB({ email, password });
      resetForm();
      navigation.navigate('Home', { screen: 'Публікації', params: { login, email } });
    } catch (error) {
      console.error('Помилка реєстрації:', error);
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
              style={styleInput('login')}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              value={values.login}
              onChangeText={handleChange('login')}
              onFocus={() => setIsFocused('login')}
              onBlur={() => setIsFocused('')}
            />
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
          <ButtonPrimary text={'Зареєстуватися'} handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    rowGap: 16,
    marginBottom: 43,
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

export default FormRegistration;
