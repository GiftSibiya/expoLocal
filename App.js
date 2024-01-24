/// DEPENDENCY IMPORT ///
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/// FILE IMPORTS ///
import Login from "./src/screens/auth/Login";
import SignUp from "./src/screens/auth/SignUp";
import HomePage from "./src/screens/main/HomePage";
import TaxiMaths from "./src/screens/main/TaxiMaths";
import LocalMaps from "./src/screens/main/LocalMaps";
import Community from "./src/screens/main/Community";
import Profile from "./src/screens/main/Profile";

/// VARIABLES ///
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

/// MAIN APPLICATION STACKS ///

// AUTHENTICATION STACK
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// MAIN APP STACK
const MainStack = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TaxiMath" component={TaxiMaths} />
      <BottomTab.Screen name="LocalMaps" component={LocalMaps} />
      <BottomTab.Screen name="Community" component={Community} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

// HOME STACKS
const HomeStack = () => {};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
