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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// IMPORT FILES
import googleImg from "../../assets/logo/icons8-google-48.png";
//--//

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 600,
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

  const handleSignUp = () => {
    navigation.navigate("SignUp");
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
                style={[styles.logoHeader3, { transform: [{ translateY }] }]}
              >
                <Animated.View
                  style={[styles.logoHeader4, { transform: [{ translateY }] }]}
                >
                  <Text style={styles.loginHeader__Text}>
                    WELCOME BACK TO LOCAL
                  </Text>
                </Animated.View>
              </Animated.View>
            </Animated.View>
          </View>
          <Text style={styles.heading}>Sign In</Text>

          {/* INPUT CONTAINER */}
          <View style={styles.InputContainer}>
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

            {/* -- */}

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* -- */}

          {/* LOGIN ICONS */}
          <View style={styles.loginIcons}>
            <Image source={googleImg} />
            <Text style={styles.google_text}>Log In With Google</Text>
          </View>
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
  container: {
    display: "flex",
    alignItems: "center",
  },

  loginHeader: {
    backgroundColor: "#004721",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "35%",
    borderRadius: 20,
  },
  logoHeader2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00632e",
    width: "100%",
    height: "80%",
    borderRadius: 20,
  },
  logoHeader3: {
    display: "felx",
    justifyContent: "center",
    backgroundColor: "#018a41",
    width: "100%",
    height: "60%",
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
    width: 300,
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
