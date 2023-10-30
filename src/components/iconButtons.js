import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonUpload = () => {
  const navigation = useNavigation();
  return (
    <AntDesign
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.btnUpload}
      name="upload"
      size={24}
      color="#BDBDBD"
    />
  );
};

const ButtonArrowLeft = () => {
  const navigation = useNavigation();
  return (
    <Feather
      onPress={() => {
        navigation.goBack();
      }}
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
