/// Imports
// Dependencies
import { View, StyleSheet, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { db, collection, getDocs } from "../../../backend/Database";

// Files

// FILES
import RankOverlay from "../../components/overlay/RankOverlay";
//IMAGES
import taxiRankIcon from "../../assets/images/taxiRank.png";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

///--

const LocalMaps = () => {
  // Hooks
  const [rankData, setRankData] = useState([]);
  const [destData, setDestData] = useState([]);

  const [selectedRank, setSelectedRank] = useState(null);
  // console.log("RankData:", RankData);

  /// functions
  // Get Rank From Firebase
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
  // console.log(rankData);
  // console.log(destData);

  // Trigger Rank Get On Page Load
  useEffect(() => {
    console.log("Use Effect Is running");
    getRank();
    getDestination();
  }, []);

  ///--

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          {rankData.map((RankData) => (
            <Marker
              key={RankData.rank_id}
              coordinate={{
                latitude: RankData.coordinates.latitude,
                longitude: RankData.coordinates.longitude,
              }}
              title={RankData.name}
              description={`Active Time: ${RankData.activeTime}`}
              onPress={() => {
                setSelectedRank(RankData);
                // console.log("Selected Rank:", RankData);
              }}
            >
              <Image source={taxiRankIcon} style={styles.rankIcon} />
            </Marker>
          ))}
        </MapView>

        {/* SELECTED OVERLAY COMPONENT */}
        {selectedRank && (
          <RankOverlay RankData={selectedRank} DestinationData={destData} />
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default LocalMaps;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
  rankIcon: {
    height: 50,
    width: 50,
  },
  refreshBtn: {
    position: "absolute",
    top: 0,
    height: 80,
    width: 100,
    border: 2,
    borderRadius: 20,
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  refreshTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
