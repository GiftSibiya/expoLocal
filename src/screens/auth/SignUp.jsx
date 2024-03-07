// IMPORT DEPENDENCIES //
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// IMPORT FILES
import googleImg from "../../../assets/logo/icons8-google-48.png";
//--//

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    );

    bounceAnimation.start();

    return () => {
      bounceAnimation.stop();
    };
  }, [translateY]);

  /// FUCNTIONS ///
  const handleLogin = () => {
    navigation.navigate("MainStack");
  };

  const handleLoginNav = () => {
    navigation.navigate("Login");
  };

  ///--///

  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.loginHeader}>
            <Animated.View
              style={[styles.logoHeader2, { transform: [{ translateY }] }]}
            >
              <Animated.View
                style={[styles.logoHeader4, { transform: [{ translateY }] }]}
              >
                <Text style={styles.loginHeader__Text}>
                  BE PART OF THE LOCAL COMMUNITY
                </Text>
              </Animated.View>
            </Animated.View>
          </View>
          <ScrollView style={styles.inputScroll}>
            <Text style={styles.heading}>Register</Text>

            {/* INPUT CONTAINER */}
            <View style={styles.InputContainer}>
              {/* NAME */}
              <TextInput
                placeholder="Full Name"
                style={styles.formInput}
                value={fullName}
                onChange={(text) => setFullName(text)}
              ></TextInput>
              {/* EMAIl */}
              <TextInput
                placeholder="Email"
                style={styles.formInput}
                value={email}
                onChange={(text) => setEmail(text)}
              ></TextInput>

              {/* PASSWORD */}

              <TextInput
                placeholder="Password"
                style={styles.formInput}
                secureTextEntry={true}
                onChange={(text) => setPassword(text)}
                value={password}
              ></TextInput>
              <TextInput
                placeholder="Password"
                style={styles.formInput}
                secureTextEntry={true}
                onChange={(text) => setPassword(text)}
                value={password}
              ></TextInput>

              {/* -- */}
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>

          {/* -- */}

          {/* LOGIN ICONS */}
          <View style={styles.loginIcons}>
            <Image source={googleImg} />
            <Text style={styles.google_text}>Sign Up With Google</Text>
          </View>
          {/* -- */}

          <View style={styles.signUpCon}>
            <Text style={styles.noAccount}>Alredy have an account ?</Text>
            <TouchableOpacity onPress={handleLoginNav}>
              <Text style={styles.signUp}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },

  loginHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004721",
    width: "100%",
    height: "20%",
    borderRadius: 20,
  },
  logoHeader2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00632e",
    width: "80%",
    height: "80%",
    borderRadius: 20,
  },

  logoHeader4: {
    display: "felx",
    justifyContent: "center",
    width: "100%",
    height: "60%",
    borderRadius: 20,
  },
  loginHeader__Text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputScroll: {
    border: 2,
    height: "50%",
  },

  heading: {
    textAlign: "center",
    fontSize: 40,
    marginVertical: 20,
  },

  /// INPUT STYLES ///

  InputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  formInput: {
    margin: 10,
    height: 60,
    width: 350,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#9DBC98",
  },

  loginBtn: {
    display: "flex",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#294B29",
    padding: 10,
    width: 300,
    height: 60,
    borderRadius: 10,
  },

  ///--///

  /// SIGN UP SECTION ///

  signUpCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  google_text: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  loginIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 5,
    width: 300,
    marginVertical: 20,
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
