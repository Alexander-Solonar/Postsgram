import { useState } from 'react';
import { StyleSheet, View, Keyboard, TextInput, FlatList, Pressable } from 'react-native';
import { SendCommentButton } from '../components/buttonIcons';
import Comment from '../components/comment';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateComments } from '../redux/operations';

const CommentsScreen = () => {
  const [comment, setComment] = useState('');
  const { items } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const {
    params: { postId },
  } = useRoute();

  const postIndex = items.findIndex(post => post.id === postId);

  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('uk-UA', options);
  const formattedDateTime =
    formattedDate.replace(/р\.$/, '') +
    ' | ' +
    date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

  const addComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Math.random(),
        text: comment,
        isMyMessage: true,
        data: formattedDateTime,
      };

      dispatch(updateComments({ postId: postId, newComments: newComment }));
    }
    setComment('');
  };
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={items[postIndex].comments}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <Image style={styles.image} source={{ uri: items[postIndex].postPhoto }} />
          }
          ListHeaderComponentStyle={{ marginBottom: 32 }}
          renderItem={({ item }) => <Comment comment={item} />}
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={comment}
            onChangeText={setComment}
            style={styles.input}
            placeholder="Коментувати..."
          />
          <SendCommentButton addComment={addComment} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 10,
    position: 'relative',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    paddingHorizontal: 16,
    fontSize: 16,
    paddingVertical: 11,
    borderRadius: 24,
  },

  image: {
    height: 240,
    borderRadius: 8,
  },
});

export default CommentsScreen;
