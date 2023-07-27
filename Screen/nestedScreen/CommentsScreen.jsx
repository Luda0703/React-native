import { 
  Text,
   View, 
   StyleSheet, 
   TextInput, 
   TouchableOpacity,
   FlatList,
  //  SafeAreaView,
  } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../config";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

export const CommentsScreen = ({route}) => {
  const [comment, setComment] = useState('');
  const [allComents, setAllComments] = useState([]);
  const {postId }= route.params;

  const {nickName} = useSelector(state => state.auth)

  const createPost = async() => {
    db.firestore()
    .collection("setPost")
    .doc(postId)
    .collection('comments')
    .onSnapshot((data) =>
      setAllComments(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    );
  };

  const getAllPosts = async () => {
    db.firestore()
    .collection("setPost")
    .doc(postId)
    .collection('comments')
    .add({comment, nickName});
  }

  useEffect(() => {
    getAllPosts()
  }, []);

  
  return (
    <View style={styles.container}>
      {/* <SafeAreaView> */}
      <FlatList
      data={allComents}
      keyExtractor={(item) => item.id}
      routerItem={({item }) => {
          <View>
            <Text>{item.nickName}</Text>
            <Text>{item.comment}</Text>
          </View>
      }}
      />
      {/* </SafeAreaView> */}
      <View>
        <TextInput style={styles.inputComment} onChangeText={setComment}/>
      </View>
      <TouchableOpacity onPress={createPost}>
        <Text>add post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  inputComment: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingLeft: 16,
    paddingRight: 50,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
});

