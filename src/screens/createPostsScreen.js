import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import PhotoPost from "../components/photoPost";

const CreatePostsScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={styles.container}>
          <PhotoPost />
          <Text style={styles.text}>Завантажте фото</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <View style={styles.inputContainer}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <TextInput
                style={styles.input}
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.btnText}>Опубліковати</Text>
            </Pressable>
            <View style={styles.btnIconDelete}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </View>
          </View>
        </View>
      </Pressable>
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
  text: {
    marginTop: 8,
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

  inputContainer: {
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

  btnContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 15,
  },

  button: {
    width: "100%",
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },

  btnText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#BDBDBD",
  },

  btnIconDelete: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePostsScreen;
