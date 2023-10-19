import { StyleSheet, View, TextInput } from "react-native";

import { useState } from "react";
import ButtonPrimary from "./buttonPrimary";
import { useNavigation } from "@react-navigation/native";

const FormRegistration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const id = Math.floor(Math.random() * 100000);

  const handleSubmit = () => {
    const data = {
      id,
      login,
      email,
      password,
    };
    navigation.navigate("Home", { screen: "PostsScreen", params: data });

    setLogin("");
    setEmail("");
    setPassword("");
  };

  const handleFocus = (input) => {
    setIsFocused(input);
  };

  const handleBlur = () => {
    setIsFocused(null);
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={{
            ...styles.input,
            borderColor: isFocused === "login" ? "#FF6C00" : "#E8E8E8",
          }}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
          value={login}
          onChangeText={setLogin}
          onFocus={() => setIsFocused("login")}
          onBlur={handleBlur}
        />
        <TextInput
          style={{
            ...styles.input,
            borderColor: isFocused === "email" ? "#FF6C00" : "#E8E8E8",
          }}
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
          placeholderTextColor="#BDBDBD"
          value={email}
          onChangeText={setEmail}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
        <TextInput
          style={{
            ...styles.input,
            borderColor: isFocused === "password" ? "#FF6C00" : "#E8E8E8",
          }}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          value={password}
          onChangeText={setPassword}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
        />
      </View>
      <ButtonPrimary text={"Зареєстуватися"} handleSubmit={handleSubmit} />
    </>
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
    fontFamily: "Roboto",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
  },
});

export default FormRegistration;
