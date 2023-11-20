import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Logout } from '../firebase/server';

const UploadButton = () => {
  const navigation = useNavigation();
  return (
    <AntDesign
      onPress={() => {
        Logout();
        navigation.navigate('Login');
      }}
      style={styles.btnUpload}
      name="upload"
      size={24}
      color="#BDBDBD"
    />
  );
};

const ArrowLeftButton = () => {
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

const OpenCommentsButton = ({ item }) => {
  const colorIcon = item.comments.length > 0 ? '#FF6C00' : '#BDBDBD';

  return (
    <Feather style={styles.openCommentsBtn} name="message-circle" size={24} color={colorIcon} />
  );
};

const LikeButton = ({ item }) => {
  const colorIcon = item.likes > 0 ? '#FF6C00' : '#BDBDBD';

  return <Feather name="thumbs-up" size={24} color={colorIcon} />;
};

const LocationButton = () => {
  return <Feather name="map-pin" size={24} color="#BDBDBD" />;
};

const SendCommentButton = ({ addComment }) => {
  return (
    <Pressable style={styles.sendCommentBtn} onPress={() => addComment()}>
      <AntDesign name="arrowup" size={24} color="#fff" />
    </Pressable>
  );
};

const DeleteButton = ({ handleDelete, isDisabled = true }) => {
  const btnDeleteStyle = {
    ...styles.btnDelete,
    backgroundColor: isDisabled ? '#F6F6F6' : '#FF6C00',
  };

  const deleteIconColor = isDisabled ? '#BDBDBD' : '#fff';
  return (
    <Pressable style={btnDeleteStyle} disabled={isDisabled} onPress={handleDelete}>
      <Feather name="trash-2" size={24} color={deleteIconColor} />
    </Pressable>
  );
};

const CreationTabBarIcon = (IconComponent, name, focused) => {
  return <IconComponent name={name} size={24} color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'} />;
};

const styles = StyleSheet.create({
  btnUpload: {
    marginRight: 16,
    transform: [{ rotate: '90deg' }],
  },

  btnArrowLeft: {
    marginLeft: 16,
  },

  sendCommentBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 10,
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: '#FF6C00',
  },

  openCommentsBtn: {
    transform: [{ rotate: '-90deg' }],
  },

  btnDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 40,
  },
});

export {
  UploadButton,
  ArrowLeftButton,
  SendCommentButton,
  LikeButton,
  LocationButton,
  OpenCommentsButton,
  DeleteButton,
  CreationTabBarIcon,
};
