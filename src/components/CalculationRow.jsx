/// IMPORT DEPENDENCIES ///

import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

/// -- ///

/// IMPORT FILES ///

//--//

const CalculationRow = (props) => {
  //// LOGIC ////

  /// STATES

  // INPUTS

  const [seats, setSeats] = useState(0);
  const [paid, setPaid] = useState(0);

  // VARIABLES
  const fare = props.fare;
  const id = props.id;

  // CALCULATIONS

  const rowCost = Number(fare) * Number(seats);
  const change = Number(paid) - Number(rowCost);
  const driversChange = Number(fare) * Number(seats);
  //--//

  // DEBUG CHECKS

  //   console.log(`seats are ${seats}`);
  //   console.log(`paid is ${paid}`);
  //   console.log(`fare is ${fare}`);
  //   console.log(`row cost is ${rowCost}`);
  //   console.log(`change is ${change}`);

  return (
    // MAIN CONTAINER
    <View style={styles.container}>
      {/* NUMBER AND PAID ROW */}

      <View style={styles.paid}>
        <Text style={styles.row__num}>{id}</Text>
        <View style={styles.rowInput}>
          <Text style={styles.row__header}>Paid</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.paid__Input}
            onChangeText={(text) => setPaid(text)}
          ></TextInput>
        </View>
      </View>

      {/* SEATS INPUT */}

      <View style={styles.paid}>
        <View style={styles.rowInput}>
          <Text style={styles.row__header}>Seats</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.paid__Input}
            onChangeText={setSeats}
          ></TextInput>
        </View>
      </View>

      {/* CHANGE TEXT */}

      <View style={styles.rowInput}>
        <Text style={styles.row__header}>Change</Text>
        <Text style={styles.row__change}>R {change}</Text>
      </View>

      {/* DRIVERS CASH */}

      <View style={styles.rowInput}>
        <Text style={styles.row__header}>Drivers</Text>
        <Text style={styles.row__change}>R {driversChange}</Text>
      </View>
    </View>
  );
};

export default CalculationRow;

const styles = StyleSheet.create({
  /// MAIN CONTAINER

  container: {
    margin: 10,
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
    height: "100%",
  },
  row__header: {
    textAlign: "center",
    fontSize: 18,
  },
  row__num: {
    fontSize: 20,
  },
  rowInput: {
    display: "flex",
    flexDirection: "column",
  },
  paid__Input: {
    width: 80,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center",
  },
  row__change: {
    marginTop: 5,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 23,
    height: 50,
  },
});
