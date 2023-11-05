import { StyleSheet, Pressable, Text } from 'react-native';

const ButtonPrimary = ({ text, handleSubmit, isDisabled = false }) => {
  const buttonStyle = isDisabled
    ? { ...styles.button, backgroundColor: '#F6F6F6' }
    : { ...styles.button, backgroundColor: '#FF6C00' };

  const textButtonStyle = isDisabled
    ? { ...styles.textBtn, color: '#BDBDBD' }
    : { ...styles.textBtn, color: '#fff' };

  return (
    <Pressable style={buttonStyle} disabled={isDisabled} onPress={isDisabled ? null : handleSubmit}>
      <Text style={textButtonStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    marginBottom: 16,
    borderRadius: 100,
  },

  textBtn: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
});

export default ButtonPrimary;
