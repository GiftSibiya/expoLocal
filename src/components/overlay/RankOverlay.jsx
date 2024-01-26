/// DEPENDENCY IMPORTS ///
import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";

/// FILES IMPORTS ///

// JSON DATA FILES
import RankData from "../../../assets/data/RankData.json";
import taxis from "../../../assets/data/destinationData.json";

// COMPONENTS
import Destination from "./Destination";

const RankOverlay = (selectedId) => {
  /// VARIABLES ///

  /// THESE RETURN THE OBJECTS SELECTED ON THE RESPECTIVE MARKERS ///
  const selectedRank = RankData.find((rank) => rank.id === selectedId.RankData);
  const selectedTaxis = taxis.find((rank) => rank.id === selectedId.RankData);
  const selectedDestinations = selectedTaxis.Taxis;
  // const selectedDestnations = taxis[parseInt(selectedId.RankData) - 1].Taxis;
  ///--///

  // console.log(selectedDestinations);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        {/* HEADER CONTENT */}
        <View style={styles.overlayHeader}>
          <Text style={styles.rankName}> {selectedRank.name}</Text>
          <Text style={styles.rankTime}>
            {" "}
            Active Time: {selectedRank.activeTime}
          </Text>
        </View>
        <ScrollView style={styles.destinationList}>
          {/* Assuming Destination component takes a single rank as a prop */}
          {selectedDestinations.map((destination, index) => (
            <Destination key={index} destination={destination} />
          ))}

          {/* Destination Aove */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    bottom: 0,
    height: "45%",
    width: "100%",
  },

  overlay: {
    display: "flex",
    backgroundColor: "white",
    height: "100%",
    width: "90%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  overlayHeader: {
    height: "25%",
  },

  destinationList: {
    height: "50%",
    borderColor: "red",
  },

  rankName: {
    textAlign: "center",
    fontSize: 20,
  },

  rankTime: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default RankOverlay;
