import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import image from "../assets/images/photo.jpg";
import iconAdd from "../assets/images/iconAdd.png";
import { useNavigation } from "@react-navigation/native";
import FormRegistration from "../components/formRegistration";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.userAvatar}>
            <Image style={styles.iconAddAvatar} source={iconAdd} />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <KeyboardAvoidingView
            style={{ width: "100%" }}
            behavior="padding"
            keyboardVerticalOffset={40}
          >
            <FormRegistration />
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Вже є акаунт? Увійти
            </Text>
          </KeyboardAvoidingView>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 92,

    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  userAvatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  iconAddAvatar: {
    position: "absolute",
    right: -12,
    bottom: 20,
  },

  title: {
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "#212121",
  },

  link: {
    marginBottom: 78,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
