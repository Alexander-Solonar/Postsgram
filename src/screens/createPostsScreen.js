import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.image}>
            <View style={styles.camera}>
              <Ionicons name="camera" size={24} color="#BDBDBD" />
            </View>
          </View>
          <Text style={styles.text}>Завантажте фото</Text>

          <View style={styles.form}>
            <View style={styles.boxInput}>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <View style={styles.boxInput}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <TextInput
                style={styles.input}
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
          </View>
          <View style={styles.blockBtn}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>Опубліковати</Text>
            </TouchableOpacity>
            <View style={styles.btnDelete}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  image: {
    position: "relative",
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  camera: {
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
  text: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "normal",
    color: "#BDBDBD",
  },

  form: {
    marginBottom: 32,
    rowGap: 16,
  },

  boxInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  input: {
    flexGrow: 1,
    height: 50,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#212121",
  },
  button: {
    width: "100%",
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },

  textBtn: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#BDBDBD",
  },

  btnDelete: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#F6F6F6",
  },

  blockBtn: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 15,
  },
});

export default CreatePostsScreen;
