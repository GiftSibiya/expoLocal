/// DEPENDENCY IMPORTS ///

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

///--///

/// FILE IMPORTS ///
import Quantum from "../../assets/images/quantum.jpg";
///--///

const Destination = ({ destination }) => {
  /// FUCTIONS ///

  // console.log(destination.price);

  ///--///

  return (
    <View style={styles.container}>
      <View style={styles.cabImage}>
        <Image source={Quantum} style={styles.taxiImage}></Image>
      </View>
      <View style={styles.destinationInfo}>
        <Text style={styles.destinationText}> {destination.destination}</Text>
      </View>

      <View style={styles.destinationCost}>
        <Text style={styles.cost}>R{destination.price}</Text>
      </View>
    </View>
  );
};

export default Destination;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    marginVertical: 2,
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: "hidden",
    padding: 2,
  },

  cabImage: {
    height: "100%",
    width: "22%",
  },

  taxiImage: {
    objectFit: "fill",
    height: "90%",
    width: "100%",
  },

  destinationInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32a852",
    borderRadius: 10,
    width: 150,
    height: 55,
  },

  destinationText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },

  destinationCost: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
    backgroundColor: "#32a852",
    borderRadius: 10,
  },

  cost: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
