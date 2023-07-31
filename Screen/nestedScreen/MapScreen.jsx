import { View, StyleSheet, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route: { params } }) => {
  const {
    photo,
    namePost,
    location: { latitude, longitude },
  } = params;

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude,
          latitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
      >
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
