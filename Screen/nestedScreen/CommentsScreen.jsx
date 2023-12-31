import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  orderBy,
  setDoc,
} from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../../config";
import { useAuth } from "../hooks/useAuth";
import { format, utcToZonedTime } from "date-fns-tz";
import { uk } from "date-fns/locale";

export const CommentsScreen = ({ route, navigation }) => {
  const [comment, setComment] = useState("");
  const [massege, setMassege] = useState([]);
  const { postId, photo } = route.params;

  const {
    authState: { login, userId },
  } = useAuth();

  const addMassege = () => {
    uploadPostToServer();
    setComment("");
  };

  const uploadPostToServer = async () => {
    const date = new Date();
    const nyDate = utcToZonedTime(date, "Europe/Kiev");
    const dataPost = format(nyDate, "yyyy-MM-dd HH:mm:ss zzz", {
      locale: uk,
    });
    await addDoc(collection(db, `setPost`, postId, "setComents"), {
      comment,
      login,
      autorCommentId: userId,
      dataPost,
    });
    const commentRef = doc(db, `setPost`, postId);
    await setDoc(
      commentRef,
      { commentsQuantity: massege.length + 1 },
      { merge: true },
      { capital: true }
    );
  };
  const getAllComments = async () => {
    const commentsQuery = query(
      collection(db, `setPost`, postId, "setComents"),
      orderBy("dataPost")
    );
    onSnapshot(commentsQuery, (data) => {
      setMassege(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <KeyboardAvoidingView
        style={styles.subContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 150 : 0}
      >
        <FlatList
          data={massege}
          renderItem={({ item }) => (
            <View
              style={
                userId === item.userId
                  ? styles.infoUserCommentThumb
                  : styles.infoCommentThumb
              }
            >
              <Image
                source={{
                  uri: "https://klike.net/uploads/posts/2020-06/1591514925_2.jpg",
                }}
                style={{ width: 28, height: 28, borderRadius: 28 }}
              />
              <View
                style={[
                  styles.infoComment,
                  userId === item.userId
                    ? { borderTopRightRadius: 0 }
                    : { borderTopLeftRadius: 0 },
                ]}
              >
                <Text style={styles.commentText}>{item.comment}</Text>
                <Text
                  style={[
                    styles.commentDate,
                    userId === item.userId
                      ? { textAlign: "left" }
                      : { textAlign: "right" },
                  ]}
                >
                  {item.commentDate}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputComment}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity style={styles.sendComment} onPress={addMassege}>
            <AntDesign
              name="arrowup"
              size={26}
              color="#FFFFFF"
              backgroundColor="#FF6C00"
              style={{ padding: 4 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 25,
    paddingHorizontal: 16,
  },
  subContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    height: 240,
    marginBottom: 32,
    borderRadius: 8,
  },
  listContainer: {},
  inputWrapper: {
    position: "relative",
  },
  infoUserCommentThumb: {
    flexDirection: "row-reverse",
    gap: 16,
    marginBottom: 24,
  },
  infoCommentThumb: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  infoComment: {
    width: "85%",
    height: "auto",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  commentText: {
    marginBottom: 8,
    fontFamily: "Inter-Black",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    fontFamily: "Inter-Black",
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
  inputComment: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingLeft: 16,
    paddingRight: 50,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  sendComment: {
    position: "absolute",
    top: 8,
    right: 8,
    borderRadius: 50,
    overflow: "hidden",
  },
});
