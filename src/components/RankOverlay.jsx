import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class RankOverlay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overlay}></View>
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
    backgroundColor: "white",
    height: "100%",
    width: "90%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
