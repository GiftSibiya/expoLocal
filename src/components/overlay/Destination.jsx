/// DEPENDENCY IMPORTS ///

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

///--///

/// FILE IMPORTS ///
import Quantum from "../../../assets/images/quantum.jpg";
///--///

const Destination = ({ destination }) => {
  /// FUCTIONS ///

  console.log(destination.price);

  ///--///

  return (
    <View style={styles.container}>
      <View style={styles.cabImage}>
        <Image source={Quantum} style={styles.taxiImage}></Image>
      </View>
      <View style={styles.destinationDetails}>
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
    borderWidth: 2,
    height: 60,
    marginVertical: 2,
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: "hidden",
    padding: 2,
  },
  taxiImage: {
    borderWidth: 2,
    borderRadius: 10,
    width: "30%",
    height: "100%",
  },
  destinationDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: 10,
    width: "30%",
  },
  destinationText: {
    textAlign: "center",
    borderWidth: 2,
    width: 150,
    height: "100%",
  },
  destinationCost: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
    backgroundColor: "silver",
    borderRadius: 10,
  },
  cost: {
    textAlign: "center",
    fontSize: 20,
  },
  cabImage: {
    height: "100%",
    width: "10%",
  },
  taxiImage: {
    objectFit: "fill",
    height: "90%",
    width: "250%",
  },
});
