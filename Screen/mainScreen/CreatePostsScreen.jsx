import { 
    Text,
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image,
 } from "react-native";
import React, {useState} from "react";
import { Camera } from "expo-camera";
// import axios from 'axios';

export const CreatePostsScreen = () => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

    const takePhoto = async () => {
      const photo = await camera.takePictureAsync();
      setPhoto(photo.url);
      console.log('photo', photo);
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
        source={{url: photo}} 
        // style={{height: 200, width: 200}}
        />
        </View>
        }
        <TouchableOpacity
        style={styles.snapContainer} 
        onPress={takePhoto}>
            <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 300,
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
    width: 200,
    height: 200, 
    
  }
});
