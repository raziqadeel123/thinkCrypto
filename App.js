/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// importing the screens from the pages folder

import HomeScreen from "./pages/HomeScreen.js";
import ListScreen from "./pages/ListScreen.js";
import WalletScreen from "./pages/WalletScreen.js";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "#e0e4e0"  },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          tabBarActiveTintColor: "#3d46d7",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = focused ? "home-account" : "home-account";
            } 
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: "",
            title: "home",
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default App;
