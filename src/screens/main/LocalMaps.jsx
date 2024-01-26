/// DEPENDENCY IMPORTS ///

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

///--///

/// FILE IMPORTS ///

import RankData from "../../../assets/RankData.json";
import RankOverlay from "../../components/RankOverlay";

///--///
const LocalMaps = () => {
  return (
    <View style={styles.container}>
      {/* THIS IS THE MAIN MAP VIEW WITH THE ORIGION SET AT TEMBISA*/}

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.007073,
          longitude: 28.183106,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* REDNERING A MARKER FOR EVERY TAXI RANK ITEM */}
        {RankData.taxiRanks.map((taxiRanks) => (
          <Marker
            key={taxiRanks.id}
            coordinate={taxiRanks.coordinates}
            title={taxiRanks.name}
            description={`Active Time: ${taxiRanks.activeTime}`}
          />
        ))}
      </MapView>

      {/* SELECTED OVERLAY COMPONENT */}
      {/* <RankOverlay /> */}
    </View>
  );
};

export default LocalMaps;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
