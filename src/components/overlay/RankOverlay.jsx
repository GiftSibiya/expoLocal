// RankOverlay component
import { Text, View, StyleSheet, ScrollView, useState } from "react-native";
import React from "react";
import { db, collection, getDocs } from "../../../backend/Database";

const RankOverlay = () => {
  // const [rankData, setRankData] = useState([]);
  // const [destData, setDestData] = useState([]);

  const getRank = async () => {
    const querySnapshot = await getDocs(collection(db, "RankData"));
    const ranks = [];
    querySnapshot.forEach((doc) => {
      ranks.push(doc.data());
    });
    setRankData(ranks);
  };

  // Get Destinations From Firebase
  const getDestination = async () => {
    const querySnapshot = await getDocs(collection(db, "DestinationData"));
    const destinations = [];
    querySnapshot.forEach((doc) => {
      destinations.push(doc.data());
    });
    setDestData(destinations);
  };

  // Extracting the selected rank ID
  // const { rank_id: selectedRankId } = selectedId;

  // Find the selected rank using the ID
  // const selectedRank = RankData.find((rank) => rank.rank_id === selectedRankId);

  // Find the selected taxis using the rank ID
  // const selectedTaxis = taxis.find((rank) => rank.rank_id === selectedRankId);

  // Extract destinations from selected taxis
  // const selectedDestinations = selectedTaxis ? selectedTaxis.Taxis : [];

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        {/* HEADER CONTENT */}
        <View style={styles.overlayHeader}>
          <Text style={styles.rankName}>
            {/* {selectedRank ? selectedRank.name : "Unknown Rank"} */}
          </Text>
          <Text style={styles.rankTime}>
            {/* {selectedRank ? `Active Time: ${selectedRank.activeTime}` : ""} */}
          </Text>
        </View>
        <ScrollView style={styles.destinationList}>
          {/* {selectedDestinations.map((destination, index) => (
            <Destination key={index} destination={destination} />
          ))} */}
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
