import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PhotoPost = () => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.iconCamera}>
        <Ionicons name="camera" size={24} color="#BDBDBD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  iconCamera: {
    position: "absolute",
    top: "50%",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    transform: [{ translateX: -30 }, { translateY: -30 }],
    borderRadius: 60,
    backgroundColor: "#fff",
  },
});

export default PhotoPost;
