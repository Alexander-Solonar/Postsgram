import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import avatar from "../assets/images/user.jpg";
import post from "../assets/images/post.jpg";

import { useState } from "react";
import { Feather } from "@expo/vector-icons";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "Ліс",
  },
  {
    id: "4116-jfk5-43rh",
    title: "Ліс",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "Ліс",
  },
  {
    id: "LG16-ant5-0J25",
    title: "Ліс",
  },
];

const PostsScreen = () => {
  const [courses, setCourses] = useState(COURSES);
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
      <View style={styles.post}>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 32 }}>
              <Image source={post} />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.informationBlock}>
                <View style={styles.block}>
                  <Feather name="message-circle" size={24} color="#BDBDBD" />
                  <Text style={styles.messageCounter}>0</Text>
                </View>
                <View style={styles.block}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.location}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
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

  post: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 8,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
  },

  informationBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  block: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },

  messageCounter: {
    fontSize: 16,
    color: "#BDBDBD",
  },

  location: {
    fontFamily: "Roboto",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#212121",
  },
});

export default PostsScreen;
