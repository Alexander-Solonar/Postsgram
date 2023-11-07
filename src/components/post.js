import { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/Context';
import { Feather } from '@expo/vector-icons';

const Post = ({ like }) => {
  const { posts } = useContext(Context);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const scale = 0.91;
  const imageWidth = screenWidth * scale;

  return (
    <SafeAreaView style={styles.post}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            <Image style={{ ...styles.image, width: imageWidth }} source={{ uri: item.photoUrl }} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.informationBlock}>
              <View style={styles.block}>
                <Feather
                  name="message-circle"
                  size={24}
                  color="#BDBDBD"
                  onPress={() => navigation.navigate('CommentsScreen')}
                />
                <Text style={styles.counter}>0</Text>
                {like && <Feather name="thumbs-up" size={24} color="#BDBDBD" />}
                {like && <Text style={styles.counter}>0</Text>}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    alignItems: 'center',
  },
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
