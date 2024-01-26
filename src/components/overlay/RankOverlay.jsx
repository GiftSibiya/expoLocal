import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Destination from "./Destination";

export class RankOverlay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overlay}>
          {/* HEADER CONTENT */}
          <View style={styles.overlayHeader}></View>
          <ScrollView style={styles.destinationList}>
            <Destination />
            <Destination />
            <Destination />
            <Destination />
            <Destination />
            <Destination />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default RankOverlay;
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
});
