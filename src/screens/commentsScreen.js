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
  const uid = useSelector(state => state.auth.uid);
  const dispatch = useDispatch();
  const post = items.find(post => post.id === postId);

  const {
    params: { postId },
  } = useRoute();

  const formattedDateTime =
    new Date()
      .toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })
      .replace(/р\.$/, '') +
    ' | ' +
    new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

  const addComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Math.random(),
        text: comment,
        isMyMessage: true,
        data: formattedDateTime,
      };
      dispatch(updateComments({ docId: uid, postId: postId, newComments: newComment }));
    }
    setComment('');
  };
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={post.comments}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Image style={styles.image} source={{ uri: post.postPhoto }} />}
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
