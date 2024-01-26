/// DEPENDENCY IMPORTS ///

import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

///--///

/// FILE IMPORTS ///

// DATA
import RankData from "../../../assets/data/RankData.json";

// FILES
import RankOverlay from "../../components/overlay/RankOverlay";

///--///
const LocalMaps = () => {
  /// HOOKS ///
  const [selectedRank, setSelectedRank] = useState(null);
  // console.log("RankData:", RankData);

  ///--///

  /// FUNCTIONS ///

  ///--///

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
        onPress={() => {
          setSelectedRank(null);
        }}
      >
        {/* REDNERING A MARKER FOR EVERY TAXI RANK ITEM */}
        {RankData.map((RankData) => (
          <Marker
            key={RankData.id}
            coordinate={RankData.coordinates}
            title={RankData.name}
            description={`Active Time: ${RankData.activeTime}`}
            onPress={() => {
              setSelectedRank(RankData);
              // console.log("Marker Pressed:", selectedRank);
            }}
          />
        ))}
      </MapView>

      {/* SELECTED OVERLAY COMPONENT */}
      {selectedRank && <RankOverlay RankData={selectedRank.id} />}
    </View>
  );
};

export default LocalMaps;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
