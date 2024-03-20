/// DEPENDENCY IMPORT ///
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialTopTabBar,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

/// FILE IMPORTS ///
import Login from "./src/screens/auth/Login";
import SignUp from "./src/screens/auth/SignUp";
import HomePage from "./src/screens/main/HomePage";
import TaxiMaths from "./src/screens/main/TaxiMaths";
import LocalMaps from "./src/screens/main/LocalMaps";
import Community from "./src/screens/main/Community";

// TAXI SCREENS
import Profile from "./src/screens/main/Profile";
import FirstPrice from "./src/components/FirstPrice";
import SecondPrice from "./src/components/SecondPrice";
import ThirdPrice from "./src/components/ThirdPrice";

/// VARIABLES ///
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

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
      <BottomTab.Screen name="TaxiMath" component={TaxiMathsStack} />
      <BottomTab.Screen name="LocalMaps" component={LocalMaps} />
      {/* <BottomTab.Screen name="Community" component={Community} />
      <BottomTab.Screen name="Profile" component={Profile} /> */}
    </BottomTab.Navigator>
  );
};

// TAXI APP STACK
const TaxiMathsStack = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="FirstPrice" component={FirstPrice} />
      <TopTab.Screen name="SecondPrice" component={SecondPrice} />
      <TopTab.Screen name="ThirdPrice" component={ThirdPrice} />
    </TopTab.Navigator>
  );
};

// HOME STACKS

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
