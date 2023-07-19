import { 
    Text,
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image,
    TextInput,
 } from "react-native";
import React, {useState, useEffect} from "react";
import { Camera } from "expo-camera";
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from "expo-location";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export const CreatePostsScreen = ({ navigation }) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [convertedCoordinate, setConvertedCoordinate] = useState(null);
    const [namePost, setNamePost] = useState('');
    const [isDisabledPublishBtn, setIsDisabledPublishBtn] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        await Location.requestForegroundPermissionsAsync();
  
        setHasPermission(status === 'granted');
      })();
    }, []);

    const openCamera = async () => {
      const result = await ImagePicker.launchCameraAsync();
  
      if (!result.canceled && result.assets.length > 0) {
        await MediaLibrary.createAssetAsync(result.assets[0].uri);
        setCapturedPhoto(result.assets[0].uri);
  
        const { coords } = await Location.getCurrentPositionAsync();
        setLocation(coords);
  
        const address = await Location.reverseGeocodeAsync({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
  
        const { region, country } = address[0];
  
        setConvertedCoordinate({ region, country });
      }
    };

    // const sendPhoto = async () => {
    //   // const photo = await camera.takePictureAsync();

    //   // const location = await Location.getCurrentPositionAsync();
    //   // console.log('latitude', location.coords.latitude);
    //   // console.log('longitude', location.coords.longitude);

    //   // setPhoto(photo.uri);
    //   // console.log('photo', photo);
    //   if (location) {
    //     const photo = await uploadPhotoToServer(capturedPhoto);
  
    //     await writeDataToFirestore({
    //       photo,
    //       namePost,
    //       location,
    //       convertedCoordinate,
    //       userId,
    //     });
  
    //     navigation.navigate('Публікації');
  
    //     setCapturedPhoto(null);
    //     setNamePost('');
    //     setLocation(null);
    //     setConvertedCoordinate(null);
    //   }
    // }

    const sendPhoto = () => {
        console.log('navigation', navigation);
        navigation.navigate('Публікації', { photo });
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
        // style={{height: 100, width: 100}}
        />
        </View>
        }
        <TouchableOpacity
        style={styles.snapContainer} 
        onPress={openCamera}
        >
            <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <TouchableOpacity 
      // onPress={openGallery}
      >
            <Text style={styles.text}>
              {capturedPhoto ? 'Редагувати фото' : 'Завантажте фото'}
            </Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              value={namePost.trimStart()}
              onChangeText={setNamePost}
            />
            <TextInput
              style={{ ...styles.input, marginTop: 16 }}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              // value={
              //   convertedCoordinate
              //     ? `${convertedCoordinate.region}, ${convertedCoordinate.country}`
              //     : null
              // }
            />
            <TouchableOpacity
              style={
                isDisabledPublishBtn
                  ? {
                      ...styles.button,
                      backgroundColor: '#F6F6F6',
                      color: '#BDBDBD',
                    }
                  : { ...styles.button, backgroundColor: '#FF6C00' }
              }
              disabled={isDisabledPublishBtn}
              onPress={sendPhoto}
            >
              <Text
                style={
                  isDisabledPublishBtn
                    ? {
                        ...styles.buttonTitle,
                        color: '#BDBDBD',
                      }
                    : { ...styles.buttonTitle, color: '#FFFFFF' }
                }
              >
                {location || !capturedPhoto
                  ? 'Опублікувати'
                  : 'Завантаження...'}
              </Text>
            </TouchableOpacity>
          </View>
      {/* <View>
      <TouchableOpacity
        style={styles.buttonContainer} 
        onPress={sendPhoto}>
            <Text style={styles.snap}>Опублікувати</Text>
        </TouchableOpacity>
      </View> */}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    flex: 1,
    // justifyContent: 'space-between',
  },
  camera: {
    position: 'relative',
    marginTop: 32,
    borderRadius: 8,
    overflow: 'hidden',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#FFFFFF4D',
  },
  takePhotoContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 1,
  },
  inputContainer: {
    marginTop: 32,
  },
  input: {
    gap: 16,
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    borderBottomColor: '#E8E8E8',
    color: '#212121',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,
    borderRadius: 100,

    // marginHorizontal: 30,
    // height: 40,
    // borderWidth: 2,
    // borderColor: '#FF6C00',
    // backgroundColor: '#FF6C00',
    // marginTop: 50,
    // borderRadius: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: "Inter-Black",
    lineHeight: 19,
  },
  text: {
    marginTop: 8,
    fontFamily: "Inter-Black",
    fontSize: 16,
    color: '#BDBDBD',
  },
  previewImage: {
    height: 240,
    borderRadius: 8,
  },
  buttonDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});
