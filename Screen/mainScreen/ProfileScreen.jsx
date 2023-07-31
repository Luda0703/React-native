import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { ImageUser } from "../image/ImageUser";
// import { useAuth } from '../hooks/useAuth';
import { authLogOut } from "../../Redax/auth/authOperations";
import { collection, query, where, getDocs, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../config'

export const ProfileScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const { login, userId, email } = useSelector((state) => state.auth);
  console.log("userId", login, userId)

  const getDataFromFirestore = async () => {
    const q = query(collection(db, "setPost"), where("userId", "==", userId));

    onSnapshot(q, (data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

};

useEffect(() => {
  getDataFromFirestore();
}, []);

  // const { authState } = useAuth();

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authLogOut());
  };

  // const pickImageAsync = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     const photoURL = await uploadAvatarToServer(result.assets[0].uri);

  //     dispatch(removeUserAvatar(photoURL));
  //   } else {
  //     alert('You did not select any image.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require("../image/photoApp.png")}>
        <View style={styles.containerForm}>
          <View style={styles.avatarImg}>
            <View style={styles.avatar}></View>
            <View>
              <ImageUser style={styles.addSvg}></ImageUser>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={styles.logAut}
                onPress={logOut}
              />
            </View>
            
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userText}>{login}</Text>
          </View>

          {posts.length > 0 && (
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
                commentsCount,
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
                      onPress={() => navigation.navigate("Коментарі", 
                      { postId: id, photo})}
                    >
                      <Feather
                        name="message-circle"
                        size={24}
                        color="#BDBDBD"
                        style={[
                          { transform: [{ rotate: "-90deg" }] },
                          commentsCount
                            ? { color: "#FF6C00" }
                            : { color: "#BDBDBD" },
                        ]}
                      />
                      <Text
                        style={[
                          styles.textComment,
                          commentsCount
                            ? { color: "#212121" }
                            : { color: "#BDBDBD" },
                        ]}
                      >
                        {commentsCount}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.info}
                      onPress={() => navigation.navigate("Карта", {
                        photo,
                        namePost,
                        location,
                      })}
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
      //   </View>
      // );
            // </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  // Avoiding: {
  //   flex: 1,
  // },
  logAut: {
    position: "absolute",
    transform: [{ translateX: 220 }, { translateY: -40 }],
  },
  addSvg: {
    width: 25,
    height: 25,
    position: "absolute",
    top: "10%",

    transform: [{ translateX: 107 }, { translateY: -40 }],
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarImg: {
    position: "relative",
    transform: [{ translateX: 0 }, { translateY: -60 }],
  },
  containerForm: {
    alignItems: "center",
    width: "100%",
    height: "80%",

    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backImage: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    width: " 100%",
    justifyContent: "center",
    alignItems: "center",
  },
  userNameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  userText: {
    color: "#212121",
    fontSize: 30,
  },
  subContainer: {
    marginBottom: 32,
  },
  image: {
    height: 240,
    borderRadius: 8,
  },
  namePost: {
    marginVertical: 8,
    fontFamily: "Inter-Black",
  },
  textComment: {
    fontFamily: "Inter-Black",
    fontSize: 16,
    color: '#BDBDBD',
  },
  info: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  locationText: {
    fontFamily: "Inter-Black",
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    color: "#212121",
  },
});

