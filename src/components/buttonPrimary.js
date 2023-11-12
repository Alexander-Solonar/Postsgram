import { StyleSheet, Pressable, Text } from 'react-native';

const ButtonPrimary = ({ text, handleSubmit, isDisabled = false }) => {
  const buttonStyle = { ...styles.button, backgroundColor: isDisabled ? '#F6F6F6' : '#FF6C00' };
  const textButtonStyle = { ...styles.textBtn, color: isDisabled ? '#BDBDBD' : '#fff' };

  return (
    <Pressable style={buttonStyle} disabled={isDisabled} onPress={handleSubmit}>
      <Text style={textButtonStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
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
