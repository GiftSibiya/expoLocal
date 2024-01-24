/// IDEPENDENCY IMPORTS ///
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
///--///

/// FUCTIONS ///
const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("MainStack");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  ///--///

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the main application</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  loginBtn: {
    marginVertical: 20,
    backgroundColor: "green",
    padding: 10,
    width: 250,
    borderRadius: 5,
  },
  signUpBtn: {
    marginVertical: 20,
    backgroundColor: "orange",
    padding: 10,
    width: 250,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
