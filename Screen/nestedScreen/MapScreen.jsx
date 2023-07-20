import {  View, StyleSheet } from "react-native";
import React from "react";
import MapView, {Marker} from "react-native-maps";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView 
      style={{flex: 1}}
      initialRegion={{
        longitude: '', 
        latitude: '',
        latitudeDelta: '',
        longitudeDelta: '',
        // latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
    }}
      >
       <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});