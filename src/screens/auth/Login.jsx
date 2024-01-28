/// IDEPENDENCY IMPORTS ///
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
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
      <View style={styles.loginHeader}></View>
      <Text style={styles.heading}>WELCOME BACK</Text>

      {/* INPUT CONTAINER */}
      <View style={styles.InputContainer}>
        <TextInput placeholder="Email" style={styles.emailInput}></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
        ></TextInput>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* -- */}

      {/* LOGIN ICONS */}
      <View style={styles.loginIcons}></View>
      {/* -- */}

      <View style={styles.signUpCon}>
        <Text style={styles.noAccount}>Don't have an account yet? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},

  loginHeader: {
    backgroundColor: "#004721",
    width: "100%",
    height: "35%",
    borderRadius: 20,
  },

  heading: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },

  /// INPUT STYLES ///

  InputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  emailInput: {
    margin: 10,
    height: 50,
    width: "90%",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#9DBC98",
  },

  passwordInput: {
    margin: 10,
    height: 50,
    width: "90%",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#9DBC98",
  },

  loginBtn: {
    marginVertical: 20,
    backgroundColor: "#294B29",
    padding: 10,
    width: 250,
    borderRadius: 10,
  },

  ///--///

  /// SIGN UP SECTION ///

  signUpCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  loginIcons: {
    borderWidth: 2,
    height: "20%",
  },

  noAccount: {
    fontSize: 15,
  },

  btnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  signUp: {
    color: "green",
    fontWeight: "bold",
  },

  ///--///
});
