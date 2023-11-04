import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Post from "../components/post";
import image from "../assets/images/photo.jpg";
import avatar from "../assets/images/user.jpg";
import { ButtonUpload } from "../components/buttonIcons";
import iconDelete from "../assets/images/iconDelete.png";

const ProfileScreen = () => {
  const data = {
    login: "Natali Romanova",
    email: "email@example.com",
  };
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <View style={styles.userAvatarContainer}>
          <Image style={styles.userPhoto} source={avatar} />
          <Image style={styles.iconDeleteAvatar} source={iconDelete} />
        </View>
        <View style={styles.btnOut}>
          <ButtonUpload />
        </View>
        <Text style={styles.title}>{data.login}</Text>
        <Post like={true} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: -80,
    paddingTop: 120,
  },

  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 16,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  userAvatarContainer: {
    position: "absolute",
    top: -60,
  },

  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  iconDeleteAvatar: {
    position: "absolute",
    right: -12,
    bottom: 20,
  },

  btnOut: {
    marginLeft: "auto",
    marginBottom: 46,
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
});

export default ProfileScreen;
