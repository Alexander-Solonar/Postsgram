import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonPrimary = ({ text, handleSubmit }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  textBtn: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#fff",
  },
});

export default ButtonPrimary;
