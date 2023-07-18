import { 
    Text,
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image,
 } from "react-native";
import React, {useState} from "react";
import { Camera } from "expo-camera";
// import * as Location from "expo-location";
// import axios from 'axios';

export const CreatePostsScreen = ({ navigation }) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);

    const takePhoto = async () => {
      const photo = await camera.takePictureAsync();
    //   const location = await Location.getCurrentPositionAsync({});
    //   const coords = {
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //   };
    //   setLocation(coords);
    //   console.log('latitude', location.coords.latitude);
    //   console.log('longitude', location.coords.longitude);
      setPhoto(photo.uri);
    //   console.log('photo', photo);
    }

    const sendPhoto = () => {
        console.log('navigation', navigation);
        navigation.navigate("Posts", { photo });
    }

  return (
    <View style={styles.container}>
      <Camera 
      style={styles.camera}
      ref={setCamera}
      >
        {photo &&
        <View style={styles.takePhotoContainer}>
        <Image 
        source={{uri: photo}} 
        style={{height: 200, width: 200}}
        />
        </View>
        }
        <TouchableOpacity
        style={styles.snapContainer} 
        onPress={takePhoto}>
            <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
      <TouchableOpacity
        style={styles.buttonContainer} 
        onPress={sendPhoto}>
            <Text style={styles.snap}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: '70%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
  },
  snap: {
    color: '#fff'
  },
  snapContainer: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 70,
    height: 70,
    borderRadius: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    // width: 200,
    // height: 200, 
    borderRadius: 10,
  },
  buttonContainer: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: '#FF6C00',
    backgroundColor: '#FF6C00',
    marginTop: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
