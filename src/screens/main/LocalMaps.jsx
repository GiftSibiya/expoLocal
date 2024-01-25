import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const LocalMaps = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.007073,
          longitude: 28.183106,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default LocalMaps;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
