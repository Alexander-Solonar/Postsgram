import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { OpenCommentsButton } from './buttonIcons';
import { fetchPosts } from '../redux/operations';

const Post = ({ like }) => {
  const { items, isLoading } = useSelector(state => state.posts);
  const uid = useSelector(state => state.auth.uid);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(uid));
  }, [dispatch, uid]);

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
                <View style={styles.block}>
                  <OpenCommentsButton postId={item.id} />
                  <Text style={styles.counter}>{item.comments.length}</Text>
                  {like && <Feather name="thumbs-up" size={24} color="#BDBDBD" />}
                  {like && <Text style={styles.counter}>{item.likes}</Text>}
                </View>
                <Pressable
                  style={styles.block}
                  onPress={() =>
                    navigation.navigate('MapScreen', {
                      location: item.location,
                      title: item.title,
                      place: item.place,
                    })
                  }
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.location}>{item.place}</Text>
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

  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },

  counter: {
    marginRight: 24,
    fontSize: 16,
    color: '#BDBDBD',
  },

  location: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#212121',
  },
});

export default Post;
