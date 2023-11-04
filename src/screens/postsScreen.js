import { StyleSheet, View, Text, Image } from "react-native";
import Post from "../components/post";
import avatar from "../assets/images/user.jpg";
import { useRoute } from "@react-navigation/native";

const PostsScreen = () => {
  const {
    params: { login, email },
  } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.userInformContainer}>
        <Image style={styles.userPhoto} source={avatar} />
        <View>
          <Text style={styles.userLogin}>{login}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  userInformContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 32,
  },

  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  userLogin: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121",
  },

  userEmail: {
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "normal",
    color: "#212121",
    opacity: 0.8,
  },
});

export default PostsScreen;
