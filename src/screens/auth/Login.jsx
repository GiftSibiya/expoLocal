/// IDEPENDENCY IMPORTS ///

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
///--///

/// FUCTIONS ///
const Login = ({ navigation }) => {
  /// HOOKS ///

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  ///--///

  /// FUCNTIONS ///
  const handleLogin = () => {
    navigation.navigate("MainStack");
  };

  const handleSignUp = () => {
    fireApp
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
    // navigation.navigate("SignUp");
  };

  ///--///

  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.loginHeader}>
            <Text style={styles.loginHeader__Text}>WELCOME BACK TO LOCAL</Text>
          </View>
          <Text style={styles.heading}>Sign In</Text>

          {/* INPUT CONTAINER */}
          <View style={styles.InputContainer}>
            {/* EMAIl */}

            <TextInput
              placeholder="Email"
              style={styles.emailInput}
              value={email}
              onChange={(text) => setEmail(text)}
            ></TextInput>

            {/* PASSWORD */}

            <TextInput
              placeholder="Password"
              style={styles.passwordInput}
              secureTextEntry={true}
              onChange={(text) => setPassword(text)}
              value={password}
            ></TextInput>

            {/* -- */}

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
      </SafeAreaView>
    </KeyboardAvoidingView>
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
  loginHeader__Text: {},

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
    height: "15%",
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
