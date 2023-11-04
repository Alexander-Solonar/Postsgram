import {
  StyleSheet,
  View,
  Keyboard,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import Comment from "../components/comment";
import { ButtonSendComment } from "../components/buttonIcons";
import PhotoPost from "../components/photoPost";
import { useState } from "react";

const messages = [
  {
    id: "1",
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    isMyMessage: false,
  },
  {
    id: "2",
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    isMyMessage: true,
  },
  { id: "3", text: "Thank you! That was very helpful!", isMyMessage: false },
  {
    id: "4",
    text: "I’ve been using primes as they tend to get a bit sharper images.",
    isMyMessage: true,
  },
];

const CommentsScreen = () => {
  const [comments, setComments] = useState(messages);
  const [comment, setComment] = useState("");

  const date = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("uk-UA", options);
  const formattedDateTime =
    formattedDate.replace(/р\.$/, "") +
    " | " +
    date.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });

  const addComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Math.random(),
        text: comment,
        isMyMessage: true,
        data: formattedDateTime,
      };
      setComments([...comments, newComment]);
    }

    setComment("");
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<PhotoPost />}
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
          <ButtonSendComment addComment={addComment} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginTop: 10,
    position: "relative",
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    paddingHorizontal: 16,
    fontSize: 16,
    paddingVertical: 11,
    borderRadius: 24,
  },
});

export default CommentsScreen;
