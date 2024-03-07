/// IMPORT DEPENDENCIES ///

import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import CalculationRow from "./CalculationRow";

///--///

/// VARIABLES ///

///--///

const ThirdPrice = () => {
  /// STATES

  const [fare, setFare] = useState(0);
  const [totalSeats, setTotalSeats] = useState(0);

  /// LOGIC

  const driversCash = Number(fare) * Number(totalSeats);
  //   console.log(`drivers is ${drivers}`);
  //   console.log(`fare is ${fare}`);
  //   console.log(`totalSeats is ${totalSeats}`);
  //   console.log(`drivers Cash is ${driversCash}`);

  //--//

  return (
    <View style={styles.container}>
      {/* APP TOP HEADER CONTAINER */}

      <View style={styles.taxiHeader}>
        {/* FIRST ROW */}

        <View style={styles.taxiFirstRow}>
          <Text style={styles.taxiHeader__title}>FRONT SEAT</Text>
        </View>

        {/* SECOND ROW */}

        <View style={styles.taxiSecondRow}>
          {/* TAXI FARE INPUT */}

          <View style={styles.taxiHeader__fields}>
            <View style={styles.taxiBody__input}>
              <Text style={styles.taxiInput__fieldName}>Taxi Fare</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.taxiBody__field}
                onChangeText={setFare}
              ></TextInput>
            </View>
          </View>

          {/* -- */}
          {/* TOTAL SEATS INPUT */}

          <View style={styles.taxiHeader__fields}>
            <View style={styles.taxiBody__input}>
              <Text style={styles.taxiInput__fieldName}>Total Seats</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.taxiBody__field}
                onChangeText={setTotalSeats}
              ></TextInput>
            </View>
          </View>

          {/* -- */}
        </View>

        {/* THIRD ROW */}

        <View style={styles.taxiThirdRow}>
          <Text style={styles.thirdRow__text}>
            Drivers Cash is : R {driversCash.toString()}
          </Text>
        </View>
      </View>

      {/* APP BODY */}
      <ScrollView style={styles.taxiBody}>
        {/* CALCULATOR ROW COMPONENT */}

        <CalculationRow id={1} fare={fare} />
        <CalculationRow id={2} fare={fare} />
        <CalculationRow id={3} fare={fare} />
        <CalculationRow id={4} fare={fare} />
        <CalculationRow id={5} fare={fare} />
        <CalculationRow id={6} fare={fare} />
      </ScrollView>
    </View>
  );
};

export default ThirdPrice;

const styles = StyleSheet.create({
  /// MAIN CONTAINER

  container: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
  },

  /// TAXI HEADER

  taxiHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 160,
    borderRadius: 20,
    backgroundColor: "#00632e",
  },

  // FIRST ROW

  taxiFirstRow: {
    height: 50,
  },

  taxiHeader__title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },

  // SECOND ROW

  taxiSecondRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
  },
  taxiInput__fieldName: {
    textAlign: "center",
    fontWeight: "bold",
  },
  taxiBody__input: {
    width: "100%",
    height: "100%",
  },
  taxiBody__field: {
    height: 40,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
  },

  // THIRD ROW

  taxiThirdRow: {
    height: 30,
  },
  thirdRow__text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  /// TAXI BODY

  taxiBody: {
    marginTop: 5,
    height: 380,
    borderRadius: 20,
    backgroundColor: "#00632e",
  },
});
