import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { db } from "../../config";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

export const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const { login, userId, email } = useSelector((state) => state.auth);

  const getDataFromFirestore = async () => {
    const q = query(collection(db, `setPost`), where("userId", "==", userId));

    onSnapshot(q, (data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Image
          source={{
            uri: "https://klike.net/uploads/posts/2020-06/1591514925_2.jpg",
          }}
          style={styles.photoUser}
        />
        <View style={styles.userInfo}>
          <Text
            style={{ fontFamily: "Inter-Black", fontSize: 13, marginBottom: 5 }}
          >
            Name: {login}
          </Text>
          <Text style={{ fontFamily: "Inter-Black", fontSize: 13 }}>
            email: {email}
          </Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({
          item: {
            id,
            photo,
            namePost,
            location,
            convertedCoordinate,
            commentsQuantity,
          },
        }) => {
          return (
            <View style={styles.subContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: photo }} style={styles.image} />
              </View>
              <Text style={[{ ...styles.text, ...styles.namePost }]}>
                {namePost}
              </Text>
              <View style={styles.infoThumb}>
                <TouchableOpacity
                  style={styles.info}
                  onPress={() =>
                    navigation.navigate("Коментарі", { postId: id, photo })
                  }
                >
                  <Feather
                    name="message-circle"
                    size={24}
                    color="#BDBDBD"
                    style={[
                      { transform: [{ rotate: "-90deg" }] },
                      commentsQuantity
                        ? { color: "#FF6C00" }
                        : { color: "#BDBDBD" },
                    ]}
                  />
                  <Text>{commentsQuantity ? commentsQuantity : "0"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.info}
                  onPress={() =>
                    navigation.navigate("Карта", {
                      photo,
                      namePost,
                      location,
                    })
                  }
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={[{ ...styles.text, ...styles.locationText }]}>
                    {convertedCoordinate}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  subContainer: {
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    color: "#212121",
  },
  image: {
    height: 240,
    borderRadius: 8,
  },
  namePost: {
    marginVertical: 8,
    fontFamily: "Inter-Black",
  },
  infoThumb: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  photoUser: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
  containerUser: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  userInfo: {
    marginLeft: 8,
    justifyContent: "center",
  },
  textComment: {
    fontFamily: "Inter-Black",
    fontSize: 16,
    color: "#BDBDBD",
  },
  locationText: {
    fontFamily: "Inter-Black",
    textDecorationLine: "underline",
  },
});
