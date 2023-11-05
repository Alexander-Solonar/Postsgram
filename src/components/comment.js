import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Comment = ({ comment }) => {
  const containerStyle = comment.isMyMessage
    ? styles.myMessageContainer
    : styles.otherMessageContainer;

  const dateStyle = comment.isMyMessage ? styles.myMessageDate : styles.otherMessageDate;

  return (
    <View style={containerStyle}>
      <Image style={styles.avatar} source={require('../assets/images/user.jpg')} />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 13 }}>{comment.text}</Text>
        <View>
          <Text style={dateStyle}>{comment.data ? comment.data : '20 березня 2022 р. 15:10'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myMessageContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: 16,
    marginBottom: 24,
  },
  otherMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: 16,
    marginBottom: 24,
  },
  textContainer: {
    flex: 1,
    rowGap: 8,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },

  myMessageDate: {
    fontSize: 10,
    color: '#BDBDBD',
  },

  otherMessageDate: {
    textAlign: 'right',
    fontSize: 10,
    color: '#BDBDBD',
  },
});

export default Comment;
