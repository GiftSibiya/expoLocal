import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "../../../backend/Database";

const RankOverlay = ({ RankData, DestinationData }) => {
  // useState hooks for managing state
  const [selectedRank, setSelectedRank] = useState(null);
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  // useEffect hook to update selectedDestinations when selectedRank changes
  useEffect(() => {
    if (RankData && DestinationData) {
      const { rank_id } = RankData;
      const selectedTaxis = DestinationData.filter(
        (dest) => dest.rank_id === rank_id
      );
      setSelectedDestinations(selectedTaxis);
      console.log("Selected Destinations:", selectedDestinations);
    }
  }, [RankData, DestinationData]);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        {/* HEADER CONTENT */}
        <View style={styles.overlayHeader}>
          {/* Rank Name */}
          <Text style={styles.rankName}>
            {RankData ? RankData.name : "Unknown Rank"}
          </Text>
          {/* -- */}

          {/* Active Times */}
          <Text style={styles.rankTime}>
            {RankData ? `Active Time: ${RankData.activeTime}` : ""}
          </Text>
          {/* -- */}
        </View>
        <ScrollView style={styles.destinationList}>
          {selectedDestinations.map((destinationData, index) => (
            <View key={index}>
              <Text style={styles.destinationHeader}>
                {destinationData.destination}
              </Text>
              <ScrollView style={styles.taxiList}>
                {destinationData.Taxis.map((taxi, taxiIndex) => (
                  <View key={taxiIndex} style={styles.taxiItem}>
                    <Text style={styles.taxiDestination}>
                      {taxi.destination}
                    </Text>
                    <Text style={styles.taxiPrice}>Price: {taxi.price}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
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
