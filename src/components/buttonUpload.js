import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ButtonUpload = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign style={styles.image} name="upload" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: 16,
    transform: [{ rotate: "90deg" }],
  },
});

export default ButtonUpload;
