import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="#FF6C00" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});
