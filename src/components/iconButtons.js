import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const ButtonUpload = () => {
  return (
    <AntDesign
      style={styles.btnUpload}
      name="upload"
      size={24}
      color="#BDBDBD"
    />
  );
};

const ButtonArrowLeft = () => {
  return (
    <Feather
      style={styles.btnArrowLeft}
      name="arrow-left"
      size={24}
      color="black"
    />
  );
};

const styles = StyleSheet.create({
  btnUpload: {
    marginRight: 16,
    transform: [{ rotate: "90deg" }],
  },

  btnArrowLeft: {
    marginLeft: 16,
  },
});

export { ButtonUpload, ButtonArrowLeft };
