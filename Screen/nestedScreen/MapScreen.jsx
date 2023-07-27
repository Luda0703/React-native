import { View, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps"
// import * as Location from "expo-location";

export const MapScreen = ({route: { params }}) => {
  
  // const [location, setLocation] = useState(null);
  // console.log(location)
  // const {latitude, longitude} = route.params.location
  const {
    photo,
    namePost,
    location: { latitude, longitude },
  } = params;

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     const coords = {
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     };
  //     setLocation(coords);
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude,
          latitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
          // ...location,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {/* <Marker coordinate={{latitude, longitude}} /> */}
        <Marker title={namePost} coordinate={{ latitude, longitude }}>
          <Image
            source={{ uri: photo }}
            style={{ width: 50, height: 50, borderRadius: 8 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
