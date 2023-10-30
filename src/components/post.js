import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import post from "../assets/images/post.jpg";

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

const Post = ({ like }) => {
  const [courses, setCourses] = useState(COURSES);
  const screenWidth = Dimensions.get("window").width;
  const scale = 0.91;
  const imageWidth = screenWidth * scale;

  return (
    <SafeAreaView style={styles.post}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            <Image
              source={post}
              style={{
                width: imageWidth,
                height: 240,
                borderRadius: 8,
              }}
            />

            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.informationBlock}>
              <View style={styles.block}>
                <Feather name="message-circle" size={24} color="#BDBDBD" />
                <Text style={styles.counter}>0</Text>
                {like && <Feather name="thumbs-up" size={24} color="#BDBDBD" />}
                {like && <Text style={styles.counter}>0</Text>}
              </View>
              <View style={styles.block}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.location}>Ukraine</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 6,
  },

  counter: {
    marginRight: 24,
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

export default Post;
