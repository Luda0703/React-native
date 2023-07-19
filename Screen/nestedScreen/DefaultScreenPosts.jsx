import { useEffect, useState } from "react";
import { 
  Text,
  View, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity 
} from "react-native";
import React from "react";

export const DefaultScreenPosts = ({route, navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params])
  console.log('posts', posts);

  return (
    <View style={styles.container}>
      <FlatList 
      data={posts} 
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={{marginBottom: 10}}>
          <Image 
          source={{uri: item.photo}} 
          style={{marginHorizontal: 10, height:100}}
          />
        </View>
      )}
      />
      <View>
      <TouchableOpacity
        // style={styles.buttonContainer} 
        onPress={() => navigation.navigate("Карта")}
        >
            <Text style={styles.snap}>MAP</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
        // style={styles.buttonContainer} 
        onPress={() => navigation.navigate("Коментарі")}
        >
            <Text style={styles.snap}>COMMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
