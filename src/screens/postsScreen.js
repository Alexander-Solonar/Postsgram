import { StyleSheet, View, Text, Image } from "react-native";
import Post from "../components/post";
import avatar from "../assets/images/user.jpg";

const PostsScreen = () => {
  // const {
  //   params: { login, email },
  // } = useRoute();

  const data = {
    login: "Natali Romanova",
    email: "email@example.com",
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image style={styles.image} source={avatar} />
        <View>
          <Text style={styles.login}>{data.login}</Text>
          <Text style={styles.email}>{data.email}</Text>
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

  user: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 32,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  login: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121",
  },

  email: {
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "normal",
    color: "#212121",
    opacity: 0.8,
  },
});

export default PostsScreen;
