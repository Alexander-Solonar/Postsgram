import { StyleSheet, View, Text, Image } from 'react-native';
import Post from '../components/post';
import { useSelector } from 'react-redux';
import { Spinner } from './spinner';

const PostsScreen = () => {
  const user = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.posts);

  return (
    <View style={styles.container}>
      <View style={styles.userInformContainer}>
        <Image style={styles.userPhoto} source={{ uri: user.photoURL }} />
        <View>
          <Text style={styles.userLogin}>{user.displayName}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
      {!isLoading && <Spinner />}
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  userInformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    marginBottom: 32,
  },

  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  userLogin: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#212121',
  },

  userEmail: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 'normal',
    color: '#212121',
    opacity: 0.8,
  },
});

export default PostsScreen;
