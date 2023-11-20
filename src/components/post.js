import { useEffect } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/operations';
import { useNavigation } from '@react-navigation/native';
import { LikeButton, LocationButton, OpenCommentsButton } from './buttonIcons';

const Post = ({ like }) => {
  const { items, isLoading } = useSelector(state => state.posts);
  const uid = useSelector(state => state.auth.uid);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(uid));
  }, [dispatch, uid]);

  const navMapScreen = item =>
    navigation.navigate('MapScreen', {
      location: item.location,
      title: item.title,
      place: item.place,
    });

  const navCommentsScreen = item => navigation.navigate('CommentsScreen', { postId: item.id });

  return (
    <SafeAreaView style={styles.post}>
      {isLoading && (
        <FlatList
          style={styles.wrapper}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image style={styles.image} source={{ uri: item.postPhoto }} />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.informationBlock}>
                <View style={styles.blockCommentsAndLikes}>
                  <Pressable style={styles.activeBlock} onPress={() => navCommentsScreen(item)}>
                    <OpenCommentsButton item={item} />
                    <Text style={styles.counter}>{item.comments.length}</Text>
                  </Pressable>

                  {like && (
                    <Pressable style={styles.activeBlock}>
                      <LikeButton item={item} />
                      <Text style={styles.counter}>{item.likes}</Text>
                    </Pressable>
                  )}
                </View>
                <Pressable style={styles.activeBlock} onPress={() => navMapScreen(item)}>
                  <LocationButton />
                  <Text style={styles.textLocation}>{item.place}</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  wrapper: { width: '100%' },

  container: { marginBottom: 32 },

  image: {
    height: 240,
    borderRadius: 8,
  },

  title: {
    marginTop: 8,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },

  informationBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  blockCommentsAndLikes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },

  activeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },

  counter: {
    fontSize: 16,
    color: '#BDBDBD',
  },

  textLocation: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#212121',
  },
});

export default Post;
