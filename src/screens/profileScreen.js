import { View, Text, StyleSheet } from "react-native";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No apps connected. Sending "devMenu" to all React Native apps failed.
        Make sure your app is running in the simulator or on a phone connected
        via USB.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "red",
  },
  text: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
